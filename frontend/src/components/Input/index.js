import styled from 'styled-components';
import { Input as UInput } from '@rocketseat/unform';
import { darken } from 'polished';
import colors from '~/styles/colors';

const Input = styled.input`
  border: 1px solid ${colors.border};
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: ${colors.body};
  display: block;
  width: 100%;
  margin: 10px 0px;
  &::placeholder {
    ${darken(0.15, '#eee')};
  }
`;

export const UnformInput = styled(UInput)`
  border: 1px solid ${colors.border};
  border-radius: 4px;
  height: 44px;
  padding: 0 15px;
  color: ${colors.body};
  display: block;
  width: 100%;
  margin: 10px 0px;
  &::placeholder {
    color: ${darken(0.15, '#eee')};
  }
`;

export default Input;
