import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '~/styles/colors';

export const DeliveryProblemDetails = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid ${lighten(0.4, colors.border)};
  padding-bottom: 10px;

  h5 {
    margin-bottom: 5px;
    text-transform: uppercase;
  }

  p,
  strong {
    color: ${colors.body};
    margin-bottom: 10px;
  }
`;
