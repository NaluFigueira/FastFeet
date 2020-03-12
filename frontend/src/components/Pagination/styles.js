import styled from 'styled-components';
import { darken } from 'polished';

export const PagesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  svg {
    color: #7d40e7;
    cursor: pointer;
  }
`;

export const PageCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0px 10px;
    color: #7d40e7;
    font-size: 16px;
    font-weight: bold;
    border-radius: 50%;
    border: 2px solid ${darken(0.2, '#7d40e7')};
    padding: 10px 15px;
  }
`;
