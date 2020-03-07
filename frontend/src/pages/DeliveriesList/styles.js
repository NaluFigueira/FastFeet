import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin: 20px auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  h2 {
    color: #444;
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;

    button {
      padding: 5px 16px;
      border: 0;
      border-radius: 4px;
      background: #7d40e7;
      color: white;
      font-size: 14px;
      font-weight: bold;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;

export const SearchBar = styled.div`
  justify-content: flex-start;
  padding: 20px 0px;

  svg {
    position: absolute;
    margin-left: 10px;
  }

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px 16px 5px 28px;
    color: #999;
    display: block;
  }
`;

export const DeliveriesTable = styled.table`
  width: 100%;

  th {
    text-align: left;
    color: #444;

    &:last-child {
      text-align: center;
    }
  }

  td {
    color: #666;

    &:last-child {
      text-align: center;
      cursor: pointer;

      svg:hover {
        color: #c6c6c6;
      }
    }
  }
`;

export const DeliverymanTableData = styled.td`
  display: flex;
  align-items: center;

  div {
    color: ${props => props.color};
    background: ${props => lighten(0.6, props.color)};
    padding: 5px;
    width: min-content;
    border-radius: 50%;
    margin-right: 5px;
  }
`;

export const StatusTableData = styled.td`
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  width: min-content;
  padding: 2px 8px;
  color: ${props => {
    switch (props.status) {
      case 'delivered':
        return '#2CA42B';
      case 'pending':
        return '#C1BC35';
      case 'canceled':
        return '#DE3B3B';
      default:
        return '#4D85EE';
    }
  }} !important;

  background-color: ${props => {
    switch (props.status) {
      case 'delivered':
        return lighten(0.5, '#2CA42B');
      case 'pending':
        return lighten(0.45, '#C1BC35');
      case 'canceled':
        return lighten(0.3, '#DE3B3B');
      default:
        return lighten(0.3, '#4D85EE');
    }
  }};

  div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px 0 0;
    background-color: ${props => {
      switch (props.status) {
        case 'delivered':
          return '#2CA42B';
        case 'pending':
          return '#C1BC35';
        case 'canceled':
          return '#DE3B3B';
        default:
          return '#4D85EE';
      }
    }};
  }
`;
