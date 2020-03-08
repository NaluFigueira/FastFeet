/* eslint-disable react/forbid-prop-types */
import React from 'react';

import { Link } from 'react-router-dom';

import { MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Menu, MenuItem } from './styles';

export default function ActionMenu({
  onRemoveClick,
  route,
  object,
  onVisualizeClick,
}) {
  return (
    <Menu>
      <MenuItem iconColor="#8E5BE8" onClick={onVisualizeClick}>
        <MdRemoveRedEye size={15} />
        <span>Visualizar</span>
      </MenuItem>
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
      <MenuItem iconColor="#DE3B3B" onClick={onRemoveClick}>
        <MdDelete size={15} />
        <span>Excluir</span>
      </MenuItem>
    </Menu>
  );
}

ActionMenu.propTypes = {
  onRemoveClick: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
  object: PropTypes.object.isRequired,
  onVisualizeClick: PropTypes.func.isRequired,
};
