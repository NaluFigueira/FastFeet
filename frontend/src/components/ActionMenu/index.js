import React from 'react';

import { MdRemoveRedEye, MdEdit, MdDelete } from 'react-icons/md';

import { Menu, MenuItem } from './styles';

export default function ActionMenu() {
  return (
    <Menu>
      <MenuItem iconColor="#8E5BE8">
        <MdRemoveRedEye size={15} />
        <span>Visualizar</span>
      </MenuItem>
      <MenuItem iconColor="#4D85EE">
        <MdEdit size={15} />
        <span>Editar</span>
      </MenuItem>
      <MenuItem iconColor="#DE3B3B">
        <MdDelete size={15} />
        <span>Excluir</span>
      </MenuItem>
    </Menu>
  );
}
