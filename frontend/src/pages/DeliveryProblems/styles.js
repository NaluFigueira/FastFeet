import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin: 20px auto;
  max-width: 850px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #444;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }
`;

export const DeliveryProblemsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 1em;

  tbody tr {
    background: white;
  }

  th {
    text-align: left;
    color: #444;
    padding: 10px;

    &:last-child {
      text-align: center;
    }
  }

  td {
    color: #666;
    padding: 10px;

    &:first-child {
      width: 15%;
    }

    &:last-child {
      text-align: center;
      cursor: pointer;

      svg:hover {
        color: #c6c6c6;
      }
    }
  }
`;

export const DeliveryProblemDescription = styled.p`
  width: 600px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
