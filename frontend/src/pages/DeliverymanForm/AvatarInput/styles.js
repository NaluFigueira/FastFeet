import styled from 'styled-components';
import colors from '~/styles/colors';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    div {
      height: 180px;
      width: 180px;
      border-radius: 50%;
      border: 2px dashed ${colors.border};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      span {
        color: ${colors.border} !important;
      }
    }

    img {
      height: 180px;
      width: 180px;
      border-radius: 50%;
      border: 2px dashed ${colors.primary};
      background: #eee;
    }

    input {
      display: none;
    }
  }
`;
