import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

const Button = styled.button`
  padding: 5px 16px;
  border: 0;
  border-radius: 4px;
  background: ${props => (props.gray ? colors.gray : colors.primary)};
  color: white;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${props =>
      props.gray ? colors.gray : darken(0.03, colors.primary)};
  }
`;

export default Button;
