import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: white;
`;

export const Background = styled.View`
  height: 20%;
  background-color: #7d40e7;
`;

export const DetailsCard = styled.View`
  position: absolute;
  width: 90%;
  margin-top: 10px;
  border: 2px solid #f8f9fd;
  border-radius: 4px;
  background-color: white;
  flex-direction: column;
  align-self: center;
`;

export const SituaitionCard = styled.View`
  width: 90%;
  margin-top: 33%;
  border: 2px solid #f8f9fd;
  border-radius: 4px;
  background-color: white;
  flex-direction: column;
  align-self: center;
`;

export const DeliveryIdContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;

export const DeliveryId = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
  font-size: 16px;
`;

export const DeliveryInfoContainer = styled.View`
  flex-direction: column;
  margin: 5px 0px;
  padding: 0px 15px;
`;

export const InfoLabel = styled.Text`
  color: #999;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const InfoText = styled.Text`
  color: #666;
  font-size: 14px;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fd;
  margin: 10px 10px;
  border: 2px solid #f8f9fd;
  border-radius: 4px;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 10px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right-color: #ddd;
  border-right-width: ${props => (props.borderOff ? '0px' : '1px')};
`;

export const ActionButtonText = styled.Text`
  margin-top: 5px;
  color: #999;
  font-size: 14px;
  text-align: center;
  max-width: 60%;
`;
