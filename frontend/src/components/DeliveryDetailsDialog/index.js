import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogContainer } from '~/components/Dialog';

import { DeliveryDetails, DeliverySignatureContainer } from './styles';

export default function DeliveryDetailsDialog({ onCloseDialog, delivery }) {
  return (
    <>
      <DialogContainer onClick={onCloseDialog} />
      <Dialog>
        <DeliveryDetails>
          <h5>Informações da encomenda</h5>
          <p>{delivery.recipient.street}</p>
          <p>{`${delivery.recipient.city} - ${delivery.recipient.state}`}</p>
          <p>{delivery.recipient.zip_code}</p>
        </DeliveryDetails>
        <DeliveryDetails>
          <h5>Datas</h5>
          <p>
            <strong>Retirada: </strong>
            {delivery.start_date || 'Ainda não retirado'}
          </p>
          <p>
            <strong>Entrega: </strong>
            {delivery.end_date || 'Ainda não entregue'}
          </p>
        </DeliveryDetails>
        <DeliverySignatureContainer>
          <h5>Assinatura do Destinatário</h5>
          {!delivery.signature ? (
            <p>Não há assinatura disponível para essa encomenda!</p>
          ) : (
            <div>
              <img src={delivery.signature.url} alt="assinatura" />
            </div>
          )}
        </DeliverySignatureContainer>
      </Dialog>
    </>
  );
}

DeliveryDetailsDialog.propTypes = {
  onCloseDialog: PropTypes.func.isRequired,
  delivery: PropTypes.shape({
    recipient: {
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zip_code: PropTypes.string.isRequired,
    },
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    signature: {
      url: PropTypes.string.isRequired,
    },
  }).isRequired,
};
