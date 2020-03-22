import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: white;
  justify-content: center;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  border-radius: 180px;
  height: 140px;
  width: 140px;
`;

export const ProfileInfo = styled.View`
  flex-direction: column;
  margin-top: 30px;
`;

export const InfoContainer = styled.View`
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InfoLabel = styled.Text`
  color: #666;
  font-size: 16px;
`;

export const InfoText = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 24px;
`;
