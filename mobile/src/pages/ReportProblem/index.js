import React, { useState } from 'react';
import { Alert } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Background, ProblemInput, SendButton } from './styles';

import api from '~/services/api';

export default function ReportProblem({ navigation, route }) {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const { id } = route.params;

  async function handleSend() {
    if (description.length === 0) {
      Alert.alert(
        'Campos obrigatórios não preenchidos',
        'Por favor, preencha o campo de descrição!'
      );
    } else {
      setLoading(true);
      try {
        await api.post('problem', {
          description,
          delivery_id: id,
        });
        navigation.goBack();
        Alert.alert(
          'Problema reportado com sucesso',
          'O problema será analisado pela distribuidora'
        );
      } catch (error) {
        Alert.alert(
          'Erro ao informar problema',
          'Não foi possível informar o problema para a distribuidora!'
        );
      }
      setLoading(false);
    }
  }

  return (
    <Container>
      <Background />
      <ProblemInput
        multiline
        value={description}
        onChangeText={setDescription}
        placeholder="Inclua aqui o problema que ocorreu na entrega!"
      />
      <SendButton loading={loading} onPress={handleSend}>
        Enviar
      </SendButton>
    </Container>
  );
}

ReportProblem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
