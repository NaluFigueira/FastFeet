import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import api from '~/services/api';

import {
  Container,
  Background,
  DeliveryId,
  ProblemContainer,
  ProblemText,
  ProblemReportDate,
  ProblemsList,
  ProblemsListContainer,
} from './styles';

export default function DeliveryProblems({ route }) {
  const { id } = route.params;
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadDeliveryProblems() {
      try {
        const response = await api.get(`delivery/${id}/problems`, {
          delivery_id: id,
        });
        setProblems(
          response.data.map(item => {
            return {
              ...item,
              created_at: format(new Date(item.created_at), 'dd/MM/yyyy'),
            };
          })
        );
      } catch (error) {
        Alert.alert(
          'Erro ao recuperar problemas',
          'Não foi possível encontrar problemas para essa encomenda!'
        );
      }
    }
    loadDeliveryProblems();
  }, []);

  return (
    <Container>
      <Background />
      <DeliveryId>
        Encomenda {id.toString().length === 1 ? `0${id}` : id}
      </DeliveryId>
      <ProblemsListContainer>
        <ProblemsList>
          <FlatList
            data={problems}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <ProblemContainer>
                <ProblemText>{item.description}</ProblemText>
                <ProblemReportDate>{item.createdAt}</ProblemReportDate>
              </ProblemContainer>
            )}
          />
        </ProblemsList>
      </ProblemsListContainer>
    </Container>
  );
}

DeliveryProblems.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
