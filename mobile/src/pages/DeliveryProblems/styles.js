import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Background = styled.View`
  height: 20%;
  background-color: #7d40e7;
`;

export const DeliveryId = styled.Text`
  position: absolute;
  top: 15px;
  align-self: center;
  font-weight: bold;
  color: white;
  font-size: 18px;
`;

export const ProblemsListContainer = styled.View`
  position: absolute;
  top: 40px;
  width: 90%;
  align-self: center;
`;

export const ProblemsList = styled.View`
  height: 90%;
`;

export const ProblemContainer = styled.View`
  margin-top: 10px;
  padding: 10px;
  border: 2px solid #f8f9fd;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  background-color: white;
  justify-content: space-between;
`;

export const ProblemText = styled.Text`
  color: #999;
  font-size: 16px;
  width: 80%;
`;

export const ProblemReportDate = styled.Text`
  color: #c1c1c1;
  font-size: 12px;
`;
