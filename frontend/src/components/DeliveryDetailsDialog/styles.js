import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '~/styles/colors';

export const DeliveryDetails = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${lighten(0.4, colors.border)};
  padding-bottom: 10px;

  h5 {
    margin-bottom: 5px;
  }

  p,
  strong {
    color: ${colors.body};
    margin-bottom: 10px;
  }
`;

export const DeliverySignatureContainer = styled.div`
  p {
    color: ${colors.body};
    margin-top: 10px;
    text-align: center;
  }

  div {
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      margin-top: 10px;
    }
  }
`;
