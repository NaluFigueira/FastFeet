import styled from 'styled-components';

export const CustomAsyncSelectStyles = {
  container: base => ({
    ...base,
    marginTop: 10,
    marginBottom: 5,
  }),
  control: base => ({
    ...base,
    height: 45,
    minHeight: 45,
  }),
  valueContainer: base => ({
    ...base,
    height: 45,
    minHeight: 45,
  }),
  input: base => ({
    ...base,
    height: 45,
    minHeight: 45,
  }),
  indicatorsContainer: base => ({
    ...base,
    height: 45,
    minHeight: 45,
  }),
};

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

    span {
      color: red;
      font-weight: bold;
      margin-top: 5px;
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

export const SelectContainer = styled.div`
  display: flex;
  margin-top: 15px;

  label {
    width: 50%;
    margin-bottom: 20px;

    &:first-child {
      margin-right: 20px;
    }

    select {
      border: 1px solid #ddd;
      border-radius: 4px;
      padding: 0 15px;
      color: #444;
      width: 100%;
      margin: 10px 0 10px 0;
      font: 14px 'Roboto', sans-serif;
    }
  }
`;
