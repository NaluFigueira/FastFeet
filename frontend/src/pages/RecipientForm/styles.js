import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  margin: 20px auto;
  max-width: 800px;
  display: flex;
  flex-direction: column;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: white;
    padding: 20px 30px;
    border-radius: 4px;
    margin-top: 30px;

    label {
      font-weight: bold;

      span {
        color: red;
      }
    }
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;

  button {
    margin-left: 10px;
  }
`;

export const NameContainer = styled.div`
  margin-bottom: 10px;
`;

export const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StreetInputContainer = styled.label`
  width: 70%;
  margin-right: 20px;
`;

export const NumberInputContainer = styled.label`
  margin-right: 20px;
`;

export const LastRowAddressInputContainer = styled.label`
  width: 30%;
`;
