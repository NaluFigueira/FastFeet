import React, { useState, useEffect } from 'react';
import { MdMoreHoriz } from 'react-icons/md';
import { toast } from 'react-toastify';

import ActionMenu from '~/components/ActionMenu';
import DeliveryProblemDialog from '~/components/DeliveryProblemDialog';
import Pagination from '~/components/Pagination';

import api from '~/services/api';

import {
  Container,
  Content,
  DeliveryProblemsTable,
  DeliveryProblemDescription,
} from './styles';

export default function DeliveryProblems() {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedDeliveryProblem, setSelectedDeliveryProblem] = useState(-1);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(-1);
  const [data, setData] = useState([]);

  async function loadDeliveryProblems(pageNumber = 1) {
    try {
      const response = await api.get('problems', {
        params: {
          page: pageNumber,
        },
      });
      setData(response.data.deliveryProblems);
      setMaxPage(response.data.maxPage);
      setPage(pageNumber);
    } catch (error) {
      toast.error('Falha ao carregar problemas!');
    }
  }

  useEffect(() => {
    async function loadInitialDeliveryProblems() {
      try {
        const response = await api.get('problems');
        setData(response.data.deliveryProblems);
        setMaxPage(response.data.maxPage);
      } catch (error) {
        toast.error('Falha ao carregar problemas!');
      }
    }

    loadInitialDeliveryProblems();
  }, []);

  async function handleCancelDelivery() {
    try {
      await api.put(
        `problems/${data[selectedDeliveryProblem].id}/cancel-delivery`
      );
      setSelectedDeliveryProblem(-1);
      loadDeliveryProblems();
      toast.success('Encomenda cancelada!');
    } catch (error) {
      toast.error('Falha no cancelamento da encomenda!');
      console.tron.log(error);
    }
  }

  return (
    <>
      {openDialog && (
        <DeliveryProblemDialog
          onCloseDialog={() => {
            setOpenDialog(false);
            setSelectedDeliveryProblem(-1);
          }}
          description={data[selectedDeliveryProblem].description}
        />
      )}
      <Container>
        <Content>
          <h2>Problemas na entrega</h2>
          <div>
            {data.length === 0 ? (
              <span>Não foram encontrados problemas em encomendas</span>
            ) : (
              <DeliveryProblemsTable>
                <thead>
                  <tr>
                    <th>Encomenda</th>
                    <th>Problema</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((delivery_problem, index) => (
                    <tr key={delivery_problem.id}>
                      <td>#{delivery_problem.delivery_id}</td>
                      <td>
                        <DeliveryProblemDescription>
                          {delivery_problem.description}
                        </DeliveryProblemDescription>
                      </td>
                      <td>
                        <MdMoreHoriz
                          size={32}
                          onClick={() =>
                            setSelectedDeliveryProblem(
                              selectedDeliveryProblem === index ? -1 : index
                            )
                          }
                        />
                        {selectedDeliveryProblem === index && (
                          <ActionMenu
                            onRemoveClick={handleCancelDelivery}
                            onVisualizeClick={() => setOpenDialog(true)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </DeliveryProblemsTable>
            )}
          </div>
          {maxPage > 1 && (
            <Pagination
              maxPage={maxPage}
              page={page}
              handleChangePage={pageNumber => loadDeliveryProblems(pageNumber)}
            />
          )}
        </Content>
      </Container>
    </>
  );
}
