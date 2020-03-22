import React from 'react';
import { Alert } from 'react-native';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  Background,
  DetailsCard,
  SituaitionCard,
  DeliveryId,
  DeliveryIdContainer,
  DeliveryInfoContainer,
  InfoLabel,
  InfoText,
  DateContainer,
  ActionsContainer,
  ActionButton,
  ActionButtonText,
} from './styles';

export default function DeliveryDetails({ navigation, route }) {
  const { delivery } = route.params;

  function getDeliveryStatus() {
    if (delivery.end_date) return 'Entregue';
    if (delivery.start_date) return 'Retirada';
    return 'Pendente';
  }

  function handleReportProblem() {
    if (delivery.end_date)
      Alert.alert(
        'Ação inválida',
        'Não é possível reportar problemas em encomendas que já foram entregues!'
      );
    else navigation.navigate('ReportProblem', { id: delivery.id });
  }

  function handleConfirmDelivery() {
    if (delivery.end_date)
      Alert.alert('Ação inválida', 'Essa encomenda já foi entregue!');
    else navigation.navigate('ConfirmDelivery');
  }

  return (
    <Container>
      <Background />
      <DetailsCard>
        <DeliveryIdContainer>
          <MaterialIcon
            name="local-shipping"
            size={24}
            style={{ color: '#7D40E7' }}
          />
          <DeliveryId>Informações da entrega</DeliveryId>
        </DeliveryIdContainer>
        <DeliveryInfoContainer>
          <InfoLabel>Destinatário</InfoLabel>
          <InfoText>{delivery.recipient.name}</InfoText>
        </DeliveryInfoContainer>
        <DeliveryInfoContainer>
          <InfoLabel>Endereço de entrega</InfoLabel>
          <InfoText>
            {delivery.recipient.street}, {delivery.recipient.number},{' '}
            {delivery.recipient.city} - {delivery.recipient.state},{' '}
            {delivery.recipient.zip_code}
          </InfoText>
        </DeliveryInfoContainer>
        <DeliveryInfoContainer>
          <InfoLabel>Produto</InfoLabel>
          <InfoText>{delivery.product}</InfoText>
        </DeliveryInfoContainer>
      </DetailsCard>
      <SituaitionCard>
        <DeliveryIdContainer>
          <MaterialIcon
            name="date-range"
            size={24}
            style={{ color: '#7D40E7' }}
          />
          <DeliveryId>Situação da entrega</DeliveryId>
        </DeliveryIdContainer>
        <DeliveryInfoContainer>
          <InfoLabel>Status</InfoLabel>
          <InfoText>{getDeliveryStatus()}</InfoText>
        </DeliveryInfoContainer>
        <DateContainer>
          <DeliveryInfoContainer>
            <InfoLabel>Data de retirada</InfoLabel>
            <InfoText>
              {delivery.start_date
                ? format(new Date(delivery.start_date), 'dd/MM/yyyy')
                : '- - / - - / - -'}
            </InfoText>
          </DeliveryInfoContainer>
          <DeliveryInfoContainer>
            <InfoLabel>Data de entrega</InfoLabel>
            <InfoText>
              {delivery.end_date
                ? format(new Date(delivery.end_date), 'dd/MM/yyyy')
                : '- - / - - / - -'}
            </InfoText>
          </DeliveryInfoContainer>
        </DateContainer>
      </SituaitionCard>
      <ActionsContainer>
        <ActionButton onPress={handleReportProblem}>
          <IoniconsIcon
            name="ios-close-circle-outline"
            size={24}
            style={{ color: '#E74040' }}
          />
          <ActionButtonText>Informar Problema</ActionButtonText>
        </ActionButton>
        <ActionButton onPress={() => navigation.navigate('DeliveryProblems')}>
          <MaterialIcon
            name="info-outline"
            size={24}
            style={{ color: '#E7BA40' }}
          />
          <ActionButtonText>Visualizar Problemas</ActionButtonText>
        </ActionButton>
        <ActionButton borderOff onPress={handleConfirmDelivery}>
          <IoniconsIcon
            name="ios-checkmark-circle-outline"
            size={24}
            style={{ color: '#7D40E7' }}
          />
          <ActionButtonText>Confirmar Entrega</ActionButtonText>
        </ActionButton>
      </ActionsContainer>
    </Container>
  );
}

DeliveryDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery: PropTypes.shape({
        id: PropTypes.number,
        product: PropTypes.string,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        createdAt: PropTypes.string,
        recipient: PropTypes.shape({
          name: PropTypes.string,
          street: PropTypes.string,
          number: PropTypes.string,
          additional_address: PropTypes.string,
          state: PropTypes.string,
          city: PropTypes.string,
          zip_code: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
