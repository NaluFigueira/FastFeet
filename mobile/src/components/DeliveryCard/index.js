import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  DeliveryIdContainer,
  DeliveryId,
  ProgressContainer,
  ProgressStatusTextContainer,
  ProgressStatusView,
  ProgressStatusText,
  ProgressLine,
  DeliveryInfoContainer,
  DeliveryInfo,
  InfoLabel,
  InfoText,
} from './styles';

export default function DeliveryCard({
  id,
  start_date,
  end_date,
  createdAt,
  city,
}) {
  return (
    <Container>
      <DeliveryIdContainer>
        <Icon name="local-shipping" size={32} style={{ color: '#7D40E7' }} />
        <DeliveryId>
          Encomenda {id.toString().length === 1 ? `0${id}` : id}
        </DeliveryId>
      </DeliveryIdContainer>
      <ProgressContainer>
        <ProgressStatusView active />
        <ProgressLine />
        <ProgressStatusView active={start_date !== null} />
        <ProgressLine />
        <ProgressStatusView active={end_date !== null} />
      </ProgressContainer>
      <ProgressStatusTextContainer>
        <ProgressStatusText>Aguardando Retirada</ProgressStatusText>
        <ProgressStatusText center>Retirada</ProgressStatusText>
        <ProgressStatusText>Entregue</ProgressStatusText>
      </ProgressStatusTextContainer>
      <DeliveryInfoContainer>
        <DeliveryInfo>
          <InfoLabel>Data</InfoLabel>
          <InfoText>{format(new Date(createdAt), 'dd/MM/yyyy')}</InfoText>
        </DeliveryInfo>
        <DeliveryInfo>
          <InfoLabel>Cidade</InfoLabel>
          <InfoText>{city}</InfoText>
        </DeliveryInfo>
        <DeliveryInfo>
          <DeliveryId>Ver detalhes</DeliveryId>
        </DeliveryInfo>
      </DeliveryInfoContainer>
    </Container>
  );
}

DeliveryCard.defaultProps = {
  start_date: null,
  end_date: null,
};

DeliveryCard.propTypes = {
  id: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
  city: PropTypes.string.isRequired,
};
