import React, { useState } from 'react';
import { Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import logo from '~/assets/logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const [id, setId] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    if (id.length === 0) {
      Alert.alert(
        'Campos obrigatórios não preenchidos',
        'Por favor, preencha o campo de id!'
      );
    } else {
      dispatch(signInRequest(id));
    }
  }

  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          placeholder="Informe seu ID de cadastro"
          keyboardType="numeric"
          autoCorrect={false}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={id}
          onChangeText={setId}
        />
        <SubmitButton
          backgroundColor="#82bf18"
          loading={loading}
          onPress={handleSubmit}
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
}
