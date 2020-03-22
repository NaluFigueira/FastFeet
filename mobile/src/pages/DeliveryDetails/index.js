import React from 'react';
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

export default function DeliveryDetails() {
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
          <InfoText>Ludwig van Beethoven</InfoText>
        </DeliveryInfoContainer>
        <DeliveryInfoContainer>
          <InfoLabel>Endereço de entrega</InfoLabel>
          <InfoText>Rua Beethoven, 1729, Diadema - SP, 09960-580</InfoText>
        </DeliveryInfoContainer>
        <DeliveryInfoContainer>
          <InfoLabel>Produto</InfoLabel>
          <InfoText>Yamaha SX7</InfoText>
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
          <InfoText>Pendente</InfoText>
        </DeliveryInfoContainer>
        <DateContainer>
          <DeliveryInfoContainer>
            <InfoLabel>Data de retirada</InfoLabel>
            <InfoText>14/01/2020</InfoText>
          </DeliveryInfoContainer>
          <DeliveryInfoContainer>
            <InfoLabel>Data de entrega</InfoLabel>
            <InfoText>- - / - - / - -</InfoText>
          </DeliveryInfoContainer>
        </DateContainer>
      </SituaitionCard>
      <ActionsContainer>
        <ActionButton>
          <IoniconsIcon
            name="ios-close-circle-outline"
            size={24}
            style={{ color: '#E74040' }}
          />
          <ActionButtonText>Informar Problema</ActionButtonText>
        </ActionButton>
        <ActionButton>
          <MaterialIcon
            name="info-outline"
            size={24}
            style={{ color: '#E7BA40' }}
          />
          <ActionButtonText>Visualizar Problemas</ActionButtonText>
        </ActionButton>
        <ActionButton borderOff>
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
