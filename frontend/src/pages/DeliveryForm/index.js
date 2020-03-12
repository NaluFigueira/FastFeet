import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import AsyncSelect from 'react-select/async';
import Button from '~/components/Button';
import Input from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Content,
  ActionsContainer,
  ButtonsContainer,
  SelectContainer,
  CustomAsyncSelectStyles,
} from './styles';

export default function DeliveryForm() {
  const [recipients, setRecipients] = useState([]);
  const [deliverymen, setDeliverymen] = useState([]);
  const [deliveryman, setDeliveryman] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [product, setProduct] = useState('');
  const [invalidSubmit, setInvalidSubmit] = useState(false);
  const location = useLocation();
  const { object: delivery, edit } = location.state || {
    edit: false,
    object: {},
  };

  async function loadRecipients() {
    try {
      const response = await api.get('recipients');
      setRecipients(
        response.data.recipients.map(r => {
          return { value: r.id, label: r.name };
        })
      );
    } catch (error) {
      console.tron.log(error);
    }
  }

  async function loadDeliverymen() {
    try {
      const response = await api.get('deliveryman');
      setDeliverymen(
        response.data.map(d => {
          return { value: d.id, label: d.name };
        })
      );
    } catch (error) {
      console.tron.log(error);
    }
  }

  useEffect(() => {
    if (edit) {
      setDeliveryman({
        value: delivery.deliveryman.id,
        label: delivery.deliveryman.name,
      });
      setRecipient({
        value: delivery.recipient.id,
        label: delivery.recipient.name,
      });
      setProduct(delivery.product);
    }
    loadRecipients();
    loadDeliverymen();
  }, []);

  const loadOptions = (inputValue, route) => {
    return api
      .get(route, { params: { name: inputValue } })
      .then(response => {
        const options = response.data.map(object => ({
          value: object.id,
          label: object.name,
        }));
        return options;
      })
      .catch(loadError => {
        console.tron.log(loadError);
      });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (recipient === null || deliveryman === null || product === '')
      setInvalidSubmit(true);
    else {
      setInvalidSubmit(false);
      try {
        if (edit)
          await api.put('orders', {
            id: delivery.id,
            recipient_id: recipient.value,
            deliveryman_id: deliveryman.value,
            product,
          });
        else
          await api.post('orders', {
            recipient_id: recipient.value,
            deliveryman_id: deliveryman.value,
            product,
          });
        toast.success(
          `Encomenda ${edit ? 'editada' : 'cadastrada'} com sucesso!`
        );
        history.push('/deliveries');
      } catch (error) {
        toast.error(
          `Falha ${edit ? 'na edição' : 'no cadastro'} da encomenda!`
        );
        console.tron.log(error);
      }
    }
  }

  return (
    <Container>
      <Content>
        <ActionsContainer>
          {edit ? (
            <h2>Edição de encomendas</h2>
          ) : (
            <h2>Cadastro de encomendas</h2>
          )}
          <ButtonsContainer>
            <Button onClick={() => history.push('/deliveries')} gray>
              <MdArrowBack
                size={18}
                color="white"
                style={{ marginRight: 10 }}
              />
              Voltar
            </Button>
            <Button form="form" type="submit">
              <MdCheck size={18} color="white" style={{ marginRight: 10 }} />
              Salvar
            </Button>
          </ButtonsContainer>
        </ActionsContainer>
        <form id="form" onSubmit={handleSubmit}>
          <SelectContainer>
            <label htmlFor="recipient">
              Destinatário
              <AsyncSelect
                cacheOptions
                value={recipient}
                loadOptions={value => loadOptions(value, 'recipients')}
                onChange={setRecipient}
                defaultOptions={recipients}
                styles={CustomAsyncSelectStyles}
              />
              {recipient === null && invalidSubmit && (
                <span>Este campo é obrigatório!</span>
              )}
            </label>
            <label htmlFor="deliveryman">
              Entregador
              <AsyncSelect
                cacheOptions
                value={deliveryman}
                loadOptions={value => loadOptions(value, 'deliveryman')}
                onChange={setDeliveryman}
                defaultOptions={deliverymen}
                styles={CustomAsyncSelectStyles}
              />
              {deliveryman === null && invalidSubmit && (
                <span>Este campo é obrigatório!</span>
              )}
            </label>
          </SelectContainer>
          <div>
            <label htmlFor="product">
              Produto
              <Input
                placeholder="Insira o nome do produto..."
                value={product}
                onChange={event => setProduct(event.target.value)}
              />
              {product === '' && invalidSubmit && (
                <span>Este campo é obrigatório!</span>
              )}
            </label>
          </div>
        </form>
      </Content>
    </Container>
  );
}
