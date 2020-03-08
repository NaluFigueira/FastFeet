import React, { useState, useEffect } from 'react';
import {
  MdAdd,
  MdMoreHoriz,
  MdSearch,
  MdArrowForward,
  MdArrowBack,
} from 'react-icons/md';
import { toast } from 'react-toastify';

import { lighten } from 'polished';
import Button from '~/components/Button';
import ActionMenu from '~/components/ActionMenu';
import { Dialog, DialogContainer } from '~/components/Dialog';

import api from '~/services/api';
import history from '~/services/history';

import {
  Container,
  Content,
  SearchBar,
  PagesContainer,
  PageCounter,
  DeliveriesTable,
  DeliverymanTableData,
  StatusTableData,
  DeliveryDetails,
  DeliverySignatureContainer,
} from './styles';

export default function DeliveriesList() {
  const [clickedOnMore, setClickedOnMore] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(-1);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [data, setData] = useState([]);

  const genrateRandomColor = () => {
    return `#${`00000${(Math.random() * (1 <= 24) || 0).toString(16)}`.slice(
      -6
    )}`;
  };

  const getDeliverymanNameInitials = deliverymanName => {
    const fullName = deliverymanName.split(' ');
    let initials = fullName[0].charAt(0);
    if (fullName.length > 0)
      initials += fullName[fullName.length - 1].charAt(0);
    return initials;
  };

  const getDeliveryStatus = (start_date, end_date, canceled_at) => {
    if (canceled_at) return 'CANCELADA';
    if (end_date) return 'ENTREGUE';
    if (start_date) return 'RETIRADA';
    return 'PENDENTE';
  };

  const getColorByStatus = (status, normal = true) => {
    switch (status) {
      case 'ENTREGUE':
        return normal ? '#2CA42B' : lighten(0.5, '#2CA42B');
      case 'PENDENTE':
        return normal ? '#C1BC35' : lighten(0.45, '#C1BC35');
      case 'CANCELADA':
        return normal ? '#DE3B3B' : lighten(0.3, '#DE3B3B');
      default:
        return normal ? '#4D85EE' : lighten(0.3, '#4D85EE');
    }
  };

  useEffect(() => {
    async function loadDeliveries() {
      try {
        const response = await api.get('orders');
        setData(
          response.data.orders.map(delivery => {
            const color = genrateRandomColor();
            const initials = getDeliverymanNameInitials(
              delivery.deliveryman.name
            );
            const status = getDeliveryStatus(
              delivery.start_date,
              delivery.end_date,
              delivery.canceled_at
            );
            return {
              ...delivery,
              color,
              initials,
              status,
            };
          })
        );
        setMaxPage(response.data.maxPage);
      } catch (error) {
        toast.error('Falha ao carregar encomendas!');
        console.tron.log(error);
      }
    }
    loadDeliveries();
  }, []);

  async function searchDelivery(productName) {
    try {
      const response = await api.get('orders', {
        params: {
          product: productName,
        },
      });
      setData(
        response.data.orders.map(delivery => {
          const color = genrateRandomColor();
          const initials = getDeliverymanNameInitials(
            delivery.deliveryman.name
          );
          const status = getDeliveryStatus(
            delivery.start_date,
            delivery.end_date,
            delivery.canceled_at
          );
          return {
            ...delivery,
            color,
            initials,
            status,
          };
        })
      );
    } catch (error) {
      toast.error('Falha ao carregar encomendas!');
      console.tron.log(error);
    }
  }

  async function handleChangePage(next = true) {
    try {
      const pageNumber = next ? page + 1 : page - 1;
      const response = await api.get('orders', {
        params: {
          page: pageNumber,
        },
      });
      setData(
        response.data.orders.map(delivery => {
          const color = genrateRandomColor();
          const initials = getDeliverymanNameInitials(
            delivery.deliveryman.name
          );
          const status = getDeliveryStatus(
            delivery.start_date,
            delivery.end_date,
            delivery.canceled_at
          );
          return {
            ...delivery,
            color,
            initials,
            status,
          };
        })
      );
      setPage(pageNumber);
    } catch (error) {
      toast.error('Falha ao carregar encomendas!');
      console.tron.log(error);
    }
  }

  const handleChange = e => {
    const searchedProductName = e.target.value;
    searchDelivery(searchedProductName);
  };

  return (
    <>
      {openDialog && (
        <>
          <DialogContainer
            onClick={() => {
              setOpenDialog(false);
              setSelectedDelivery(-1);
            }}
          />
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
              {!data[selectedDelivery].signature ? (
                <p>Não há assinatura disponível para essa encomenda!</p>
              ) : (
                <div>
                  <img
                    src={data[selectedDelivery].signature.url}
                    alt="assinatura"
                  />
                </div>
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
              <input
                type="text"
                onChange={handleChange}
                placeholder="Buscar por encomendas"
              />
            </SearchBar>
            <Button
              type="button"
              onClick={() => history.push('/delivery/register')}
            >
              <MdAdd size={24} style={{ marginRight: 10 }} />
              Cadastrar
            </Button>
          </div>
          <div>
            {data.length === 0 ? (
              <span>Não foram encontradas encomendas</span>
            ) : (
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
                      <DeliverymanTableData color={delivery.color}>
                        <div>{delivery.initials}</div>
                        {delivery.deliveryman.name}
                      </DeliverymanTableData>
                      <td>{delivery.recipient.city}</td>
                      <td>{delivery.recipient.state}</td>
                      <StatusTableData
                        color={getColorByStatus(delivery.status)}
                        backgroundColor={getColorByStatus(
                          delivery.status,
                          false
                        )}
                      >
                        <div />
                        {delivery.status}
                      </StatusTableData>
                      <td>
                        <MdMoreHoriz
                          size={32}
                          onClick={() => {
                            setSelectedDelivery(index);
                            setClickedOnMore(!(index === selectedDelivery));
                          }}
                        />
                        {selectedDelivery === index && clickedOnMore && (
                          <ActionMenu
                            route="delivery"
                            object={data[selectedDelivery]}
                            onRemoveClick={() => {}}
                            onVisualizeClick={() => {
                              setClickedOnMore(false);
                              setOpenDialog(true);
                            }}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </DeliveriesTable>
            )}
          </div>
          <PagesContainer>
            {page !== 1 && (
              <MdArrowBack size={32} onClick={() => handleChangePage(false)} />
            )}
            <PageCounter>
              <span>{page}</span>
            </PageCounter>
            {page !== maxPage && (
              <MdArrowForward size={32} onClick={() => handleChangePage()} />
            )}
          </PagesContainer>
        </Content>
      </Container>
    </>
  );
}
