import styled from 'styled-components/native';

export const Container = styled.View`
  border: 2px solid #f8f9fd;
  flex-direction: column;
  margin: 15px 0px;
  border-radius: 4px;
`;

export const DeliveryIdContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 15px;
`;

export const DeliveryId = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  margin-left: 10px;
  font-size: 16px;
`;

export const ProgressContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProgressStatusView = styled.View`
  border: 1px solid #7d40e7;
  border-radius: 180px;
  height: 12px;
  width: 12px;
  background-color: ${props => (props.active ? '#7D40E7' : 'white')};
`;

export const ProgressLine = styled.View`
  height: 1px;
  background-color: #7d40e7;
  width: 30%;
`;

export const ProgressStatusTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProgressStatusText = styled.Text`
  margin-top: 5px;
  color: #999;
  font-size: 10px;
  width: ${props => (props.center ? '45%' : '22%')};
  text-align: center;
`;

export const DeliveryInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f8f9fd;
  padding: 15px;
  margin-top: 20px;
`;

export const DeliveryInfo = styled.View`
  flex-direction: column;
`;

export const InfoLabel = styled.Text`
  color: #666;
  font-size: 10px;
`;

export const InfoText = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 12px;
`;
