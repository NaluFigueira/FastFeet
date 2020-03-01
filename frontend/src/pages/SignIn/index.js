import React from 'react';

import { Form, Input } from '@rocketseat/unform';

import * as Yup from 'yup';

import logo from '~/assets/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido!')
    .required('O e-mail é obrigatório!'),
  password: Yup.string().required('A senha é obrigatória!'),
});

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <img src={logo} alt="FastFeet" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label>
          Seu e-mail
          <Input type="email" name="email" placeholder="exemplo@email.com" />
        </label>

        <label>
          Sua senha
          <Input type="password" name="password" placeholder="********" />
        </label>

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
