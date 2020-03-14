/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

import { MdRemoveRedEye, MdEdit, MdDelete, MdCancel } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Menu, MenuItem } from './styles';

export default function ActionMenu({
  onRemoveClick,
  onCancelClick,
  route,
  object,
  onVisualizeClick,
}) {
  return (
    <Menu>
      {onVisualizeClick && (
        <MenuItem iconColor="#8E5BE8" onClick={onVisualizeClick}>
          <MdRemoveRedEye size={15} />
          <span>Visualizar</span>
        </MenuItem>
      )}
      {object && (
        <MenuItem iconColor="#4D85EE">
          <MdEdit size={15} />
          <Link
            to={{
              pathname: `${route}/edit`,
              state: { object, edit: true },
            }}
          >
            Editar
          </Link>
        </MenuItem>
      )}
      {onRemoveClick && (
        <MenuItem iconColor="#DE3B3B" onClick={onRemoveClick}>
          <MdDelete size={15} />
          <span>Excluir</span>
        </MenuItem>
      )}
      {onCancelClick && (
        <MenuItem iconColor="#DE3B3B" onClick={onCancelClick}>
          <MdCancel size={15} />
          <span>Cancelar</span>
        </MenuItem>
      )}
    </Menu>
  );
}

ActionMenu.defaultProps = {
  onVisualizeClick: null,
  onCancelClick: null,
  onRemoveClick: null,
  object: null,
  route: '',
};

ActionMenu.propTypes = {
  onRemoveClick: PropTypes.func,
  route: PropTypes.string,
  object: PropTypes.object,
  onVisualizeClick: PropTypes.func,
  onCancelClick: PropTypes.func,
};
