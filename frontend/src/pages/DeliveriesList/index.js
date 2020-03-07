import React, { useState } from 'react';

import { MdAdd, MdMoreHoriz, MdSearch } from 'react-icons/md';

import ActionMenu from '~/components/ActionMenu';

import {
  Container,
  Content,
  SearchBar,
  DeliveriesTable,
  DeliverymanTableData,
  StatusTableData,
} from './styles';

export default function DeliveriesList() {
  const [clickedOnMore, setClickedOnMore] = useState(false);

  return (
    <Container>
      <Content>
        <h2>Gerenciando encomendas</h2>
        <div>
          <SearchBar>
            <MdSearch size={18} color="#999" />
            <input type="text" placeholder="Buscar por encomendas" />
          </SearchBar>
          <button type="button">
            <MdAdd size={24} style={{ marginRight: 10 }} />
            Cadastrar
          </button>
        </div>
        <div>
          <DeliveriesTable>
            <tr>
              <th>ID</th>
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
            <tr>
              <td>#01</td>
              <td>Ludwig van Beethoven</td>
              <DeliverymanTableData
                color={`#${`00000${(Math.random() * (1 <= 24) || 0).toString(
                  16
                )}`.slice(-6)}`}
              >
                <div>JD</div>
                John Doe
              </DeliverymanTableData>
              <td>Rio do Sul</td>
              <td>Santa Catarina</td>
              <StatusTableData status="delivered">
                <div />
                ENTREGUE
              </StatusTableData>
              <td>
                <MdMoreHoriz
                  size={24}
                  onClick={() => setClickedOnMore(!clickedOnMore)}
                />
                {clickedOnMore && <ActionMenu />}
              </td>
            </tr>
          </DeliveriesTable>
        </div>
      </Content>
    </Container>
  );
}
