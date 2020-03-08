import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  padding: 5px 16px;
  border: 0;
  border-radius: 4px;
  background: ${props => (props.gray ? '#CCC' : '#7d40e7')};
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${props => (props.gray ? '#CCC' : darken(0.03, '#7d40e7'))};
  }
`;

export default Button;
