import styled from 'styled-components';

export const Dialog = styled.div`
  background: white;
  padding: 20px;
  position: fixed;
  z-index: 1;
  width: 30vw;
  top: 25vh;
  left: 35vw;
`;

export const DialogContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;
