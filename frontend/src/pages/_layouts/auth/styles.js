import styled from 'styled-components';
import { darken } from 'polished';
import colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  background: white;
  padding: 60px 20px;
  border-radius: 4px;

  img {
    height: 44px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      color: ${colors.title};
      margin: 10px 0px;
      text-align: start;
      text-transform: uppercase;
      font-weight: bold;

      input {
        border: 1px solid ${colors.border};
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: ${colors.body};
        display: block;
        width: 100%;
        margin: 10px 0px;
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: ${colors.primary};
      color: white;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, colors.primary)};
      }
    }
  }
`;
