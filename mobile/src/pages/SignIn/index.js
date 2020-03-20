import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          keyboardType="numeric"
          autoCorrect={false}
        />
        <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
      </Form>
    </Container>
  );
}
