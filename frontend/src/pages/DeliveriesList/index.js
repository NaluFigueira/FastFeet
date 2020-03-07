import React, { useState, useEffect } from 'react';

import { MdAdd, MdMoreHoriz, MdSearch } from 'react-icons/md';

import ActionMenu from '~/components/ActionMenu';
import { Dialog, DialogContainer } from '~/components/Dialog';

import {
  Container,
  Content,
  SearchBar,
  DeliveriesTable,
  DeliverymanTableData,
  StatusTableData,
  DeliveryDetails,
  DeliverySignatureContainer,
} from './styles';

export default function DeliveriesList() {
  const [clickedOnMore, setClickedOnMore] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(-1);
  const [data, setData] = useState([]);

  const genrateRandomColor = () => {
    return `#${`00000${(Math.random() * (1 <= 24) || 0).toString(16)}`.slice(
      -6
    )}`;
  };

  useEffect(() => {
    const color = genrateRandomColor();
    setData([
      {
        id: 1,
        product: 'Monitor',
        canceled_at: null,
        start_date: null,
        end_date: null,
        status: 'pending',
        signature: null,
        deliveryman: {
          name: 'João da Silva',
          initials: 'JD',
          color,
        },
        recipient: {
          name: 'Julia Oliveira',
          street: 'Avenida Brasil',
          number: '198',
          additional_address: 'Edifício Sol Nascente, Apt. 2',
          state: 'São Paulo',
          city: 'Jardim Paulista',
          zip_code: '01430000',
        },
      },
      {
        id: 3,
        product: 'Monitor',
        canceled_at: null,
        start_date: null,
        end_date: null,
        signature: null,
        status: 'pending',
        deliveryman: {
          name: 'João da Silva',
          initials: 'JD',
          color,
        },
        recipient: {
          name: 'Julia Oliveira',
          street: 'Avenida Brasil',
          number: '198',
          additional_address: 'Edifício Sol Nascente, Apt. 2',
          state: 'São Paulo',
          city: 'Jardim Paulista',
          zip_code: '01430000',
        },
      },
    ]);
  }, []);

  return (
    <>
      {selectedDelivery !== -1 && clickedOnMore === false && (
        <>
          <DialogContainer onClick={() => setSelectedDelivery(-1)} />
          <Dialog>
            <DeliveryDetails>
              <h5>Informações da encomenda</h5>
              <p>{data[selectedDelivery].recipient.street}</p>
              <p>
                {`${data[selectedDelivery].recipient.city} - ${data[selectedDelivery].recipient.state}`}
              </p>
              <p>{data[selectedDelivery].recipient.zip_code}</p>
            </DeliveryDetails>
            <DeliveryDetails>
              <h5>Datas</h5>
              <p>
                <strong>Retirada: </strong>
                {data[selectedDelivery].start_date || 'Ainda não retirado'}
              </p>
              <p>
                <strong>Entrega: </strong>
                {data[selectedDelivery].end_date || 'Ainda não entregue'}
              </p>
              <p>{data[selectedDelivery].zip_code}</p>
            </DeliveryDetails>
            <DeliverySignatureContainer>
              <h5>Assinatura do Destinatário</h5>
              {!data[selectedDelivery].signature && (
                <p>Não há assinatura disponível para essa encomenda!</p>
              )}
            </DeliverySignatureContainer>
          </Dialog>
        </>
      )}
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
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Destinatário</th>
                  <th>Entregador</th>
                  <th>Cidade</th>
                  <th>Estado</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {data.map((delivery, index) => (
                  <tr key={delivery.id}>
                    <td>#{delivery.id}</td>
                    <td>{delivery.recipient.name}</td>
                    <DeliverymanTableData color={delivery.deliveryman.color}>
                      <div>{delivery.deliveryman.initials}</div>
                      {delivery.deliveryman.name}
                    </DeliverymanTableData>
                    <td>{delivery.recipient.city}</td>
                    <td>{delivery.recipient.state}</td>
                    <StatusTableData status={delivery.status}>
                      <div />
                      {delivery.status.toUpperCase()}
                    </StatusTableData>
                    <td>
                      <MdMoreHoriz
                        size={32}
                        onClick={() => {
                          setSelectedDelivery(
                            selectedDelivery !== -1 ? -1 : index
                          );
                          setClickedOnMore(!clickedOnMore);
                        }}
                      />
                      {selectedDelivery === index && clickedOnMore && (
                        <ActionMenu
                          onEditClick={() => {}}
                          onRemoveClick={() => {}}
                          onVisualizeClick={() => setClickedOnMore(false)}
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </DeliveriesTable>
          </div>
        </Content>
      </Container>
    </>
  );
}
