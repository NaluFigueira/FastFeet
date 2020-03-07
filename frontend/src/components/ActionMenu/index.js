import React from 'react';

import { MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';

import PropTypes from 'prop-types';

import { Menu, MenuItem } from './styles';

export default function ActionMenu({
  onRemoveClick,
  onEditClick,
  onVisualizeClick,
}) {
  return (
    <Menu>
      <MenuItem iconColor="#8E5BE8" onClick={onVisualizeClick}>
        <MdRemoveRedEye size={15} />
        <span>Visualizar</span>
      </MenuItem>
      <MenuItem iconColor="#4D85EE" onClick={onEditClick}>
        <MdEdit size={15} />
        <span>Editar</span>
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
  onEditClick: PropTypes.func.isRequired,
  onVisualizeClick: PropTypes.func.isRequired,
};
