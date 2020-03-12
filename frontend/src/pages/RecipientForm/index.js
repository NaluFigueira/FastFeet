import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MdArrowBack, MdCheck } from 'react-icons/md';
import { toast } from 'react-toastify';

import * as Yup from 'yup';

import { Form } from '@rocketseat/unform';

import Button from '~/components/Button';
import { UnformInput } from '~/components/Input';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Content,
  ActionsContainer,
  ButtonsContainer,
  NameContainer,
  AddressContainer,
  StreetInputContainer,
  NumberInputContainer,
  LastRowAddressInputContainer,
} from './styles';

export default function RecipientForm() {
  const [data, setData] = useState({});
  const location = useLocation();
  const { object: recipient, edit } = location.state || {
    edit: false,
    object: {},
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome completo é obrigatório!'),
    street: Yup.string().required('Nome da rua é obrigatório!'),
    number: Yup.string().required('Número da residência é obrigatório!'),
    additional_address: Yup.string(),
    state: Yup.string().required('Nome do estado é obrigatório!'),
    city: Yup.string().required('Nome da cidade é obrigatório!'),
    zip_code: Yup.string().required('CEP é obrigatório!'),
  });

  useEffect(() => {
    if (edit) {
      setData(recipient);
    }
  }, []);

  async function handleSubmit({
    name,
    street,
    number,
    additional_address,
    state,
    city,
    zip_code,
  }) {
    try {
      if (edit)
        await api.put('recipients', {
          id: recipient.id,
          name,
          street,
          number,
          additional_address,
          state,
          city,
          zip_code,
        });
      else
        await api.post('recipients', {
          name,
          street,
          number,
          additional_address,
          state,
          city,
          zip_code,
        });
      toast.success(
        `Destinatário ${edit ? 'editado' : 'cadastrado'} com sucesso!`
      );
      history.push('/recipients');
    } catch (error) {
      toast.error(
        `Falha${edit ? ' na edição' : ' no cadastro'} do destinatário!`
      );
      console.tron.log(error);
    }
  }

  return (
    <Container>
      <Content>
        <ActionsContainer>
          {edit ? (
            <h2>Edição de destinatário</h2>
          ) : (
            <h2>Cadastro de destinatário</h2>
          )}
          <ButtonsContainer>
            <Button onClick={() => history.push('/recipients')} gray>
              <MdArrowBack
                size={18}
                color="white"
                style={{ marginRight: 10 }}
              />
              Voltar
            </Button>
            <Button type="submit" form="form">
              <MdCheck size={18} color="white" style={{ marginRight: 10 }} />
              Salvar
            </Button>
          </ButtonsContainer>
        </ActionsContainer>
        <Form
          id="form"
          initialData={data}
          schema={schema}
          onSubmit={handleSubmit}
        >
          <NameContainer>
            <label htmlFor="name">
              Nome
              <UnformInput placeholder="Ludwig van Beethoven" name="name" />
            </label>
          </NameContainer>
          <AddressContainer>
            <StreetInputContainer htmlFor="street">
              Rua
              <UnformInput placeholder="Rua Beethoven" name="street" />
            </StreetInputContainer>
            <NumberInputContainer htmlFor="number">
              Número
              <UnformInput type="number" placeholder="1729" name="number" />
            </NumberInputContainer>
            <label htmlFor="additional_address">
              Complemento
              <UnformInput name="additional_address" />
            </label>
          </AddressContainer>
          <AddressContainer>
            <LastRowAddressInputContainer htmlFor="city">
              Cidade
              <UnformInput placeholder="Diadema" name="city" />
            </LastRowAddressInputContainer>
            <LastRowAddressInputContainer htmlFor="state">
              Estado
              <UnformInput placeholder="São Paulo" name="state" />
            </LastRowAddressInputContainer>
            <LastRowAddressInputContainer htmlFor="zip_code">
              CEP
              <UnformInput
                placeholder="09960-580"
                maxLength={9}
                name="zip_code"
              />
            </LastRowAddressInputContainer>
          </AddressContainer>
        </Form>
      </Content>
    </Container>
  );
}
