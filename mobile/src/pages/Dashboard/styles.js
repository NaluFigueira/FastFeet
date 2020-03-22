import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 15%;
`;

export const UserInfo = styled.View`
  flex-direction: column;
`;

export const ProfilePicture = styled.Image`
  border-radius: 180px;
  height: 120px;
  width: 120px;
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
