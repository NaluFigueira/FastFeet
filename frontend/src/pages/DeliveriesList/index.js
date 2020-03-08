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

import colors from '~/styles/colors';
import Button from '~/components/Button';
import ActionMenu from '~/components/ActionMenu';
import DeliveryDetailsDialog from '~/components/DeliveryDetailsDialog';

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
} from './styles';

export default function DeliveriesList() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDelivery, setSelectedDelivery] = useState(-1);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [searchedDelivery, setSearchedDelivery] = useState('');
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

  const getColorByStatus = (status, type = 'text') => {
    switch (status) {
      case 'ENTREGUE':
        return type === 'text'
          ? colors.delivered
          : lighten(0.5, colors.delivered);
      case 'PENDENTE':
        return type === 'text'
          ? colors.pendiing
          : lighten(0.45, colors.pendiing);
      case 'CANCELADA':
        return type === 'text'
          ? colors.canceled
          : lighten(0.3, colors.canceled);
      default:
        return type === 'text' ? colors.started : lighten(0.3, colors.started);
    }
  };

  const setDeliveries = deliveries => {
    setData(
      deliveries.map(delivery => {
        const color = genrateRandomColor();
        const initials = getDeliverymanNameInitials(delivery.deliveryman.name);
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
  };

  async function loadDeliveries(product = '', pageNumber = 1) {
    try {
      const response = await api.get('orders', {
        params: {
          product:
            product === '' && searchedDelivery !== ''
              ? searchedDelivery
              : product,
          page: pageNumber,
        },
      });
      setDeliveries(response.data.orders);
      setMaxPage(response.data.maxPage);
      return true;
    } catch (error) {
      toast.error('Falha ao carregar encomendas!');
      return false;
    }
  }

  useEffect(() => {
    loadDeliveries();
  }, []);

  useEffect(() => {
    const loaded = loadDeliveries();
    if (loaded) setPage(1);
  }, [searchedDelivery]);

  async function handleChangePage(pageNumber) {
    const loaded = loadDeliveries('', pageNumber);
    if (loaded) setPage(pageNumber);
  }

  const handleInputSearch = event => {
    setSearchedDelivery(event.target.value);
  };

  return (
    <>
      {openDialog && (
        <DeliveryDetailsDialog
          onCloseDialog={() => {
            setOpenDialog(false);
            setSelectedDelivery(-1);
          }}
          delivery={data[selectedDelivery]}
        />
      )}
      <Container>
        <Content>
          <h2>Gerenciando encomendas</h2>
          <div>
            <SearchBar>
              <MdSearch size={18} color={colors.body} />
              <input
                type="text"
                value={searchedDelivery}
                onChange={handleInputSearch}
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
                          'background'
                        )}
                      >
                        <div />
                        {delivery.status}
                      </StatusTableData>
                      <td>
                        <MdMoreHoriz
                          size={32}
                          onClick={() => setSelectedDelivery(index)}
                        />
                        {selectedDelivery === index && (
                          <ActionMenu
                            route="delivery"
                            object={data[selectedDelivery]}
                            onRemoveClick={() => {}}
                            onVisualizeClick={() => setOpenDialog(true)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </DeliveriesTable>
            )}
          </div>
          {maxPage > 1 && (
            <PagesContainer>
              {page !== 1 && (
                <MdArrowBack
                  size={32}
                  onClick={() => handleChangePage(page - 1)}
                />
              )}
              <PageCounter>
                <span>{page}</span>
              </PageCounter>
              {page !== maxPage && (
                <MdArrowForward
                  size={32}
                  onClick={() => handleChangePage(page + 1)}
                />
              )}
            </PagesContainer>
          )}
        </Content>
      </Container>
    </>
  );
}
