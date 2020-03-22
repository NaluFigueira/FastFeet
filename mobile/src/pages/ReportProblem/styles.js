import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Background = styled.View`
  height: 20%;
  background-color: #7d40e7;
`;

export const ProblemInput = styled(Input)`
  position: absolute;
  top: 10px;
  height: 65%;
  width: 90%;
  align-self: center;
  border: 2px solid #f8f9fd;
  border-radius: 4px;
  align-items: flex-start;
`;

export const SendButton = styled(Button)`
  margin-left: 20px;
  margin-right: 20px;
  top: 50%;
`;
