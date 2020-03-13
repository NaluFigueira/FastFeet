import React from 'react';
import PropTypes from 'prop-types';

import { Dialog, DialogContainer } from '~/components/Dialog';

import { DeliveryProblemDetails } from './styles';

export default function DeliveryProblemDialog({ onCloseDialog, description }) {
  return (
    <>
      <DialogContainer onClick={onCloseDialog} />
      <Dialog>
        <DeliveryProblemDetails>
          <h5>Visualizar Encomenda</h5>
          <p>{description}</p>
        </DeliveryProblemDetails>
      </Dialog>
    </>
  );
}

DeliveryProblemDialog.propTypes = {
  onCloseDialog: PropTypes.func.isRequired,

  description: PropTypes.string.isRequired,
};
