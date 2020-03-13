import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { MdArrowBack, MdCheck } from 'react-icons/md';

import { toast } from 'react-toastify';
import * as Yup from 'yup';

import Button from '~/components/Button';
import { UnformInput } from '~/components/Input';
import AvatarInput from './AvatarInput';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Content,
  ActionsContainer,
  ButtonsContainer,
} from './styles';

export default function DeliverymanForm() {
  const [data, setData] = useState({});
  const location = useLocation();
  const { object: deliveryman, edit } = location.state || {
    edit: false,
    object: {},
  };

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome completo é obrigatório!'),
    email: Yup.string()
      .email('Insira um e-mail válido!')
      .required('E-mail é obrigatório!'),
    avatar_id: Yup.number().required('Imagem de perfil é obrigatória!'),
  });

  useEffect(() => {
    if (edit) {
      setData(deliveryman);
    }
  }, [deliveryman, edit]);

  async function handleSubmit({ name, email, avatar_id }) {
    try {
      if (edit)
        await api.put('deliveryman', {
          id: deliveryman.id,
          name,
          email,
          avatar_id,
        });
      else
        await api.post('deliveryman', {
          name,
          email,
          avatar_id,
        });
      toast.success(
        `Entregador ${edit ? 'editado' : 'cadastrado'} com sucesso!`
      );
      history.push('/deliverymen');
    } catch (error) {
      toast.error(
        `Falha${edit ? ' na edição' : ' no cadastro'} do entregador!`
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
            <Button onClick={() => history.push('/deliverymen')} gray>
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
          <AvatarInput name="avatar_id" />

          <UnformInput name="name" placeholder="John Doe" />
          <UnformInput name="email" placeholder="example@rocketseat.com" />
        </Form>
      </Content>
    </Container>
  );
}
