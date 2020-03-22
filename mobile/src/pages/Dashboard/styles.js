import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: white;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 15%;
`;

export const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfilePicture = styled.Image`
  border-radius: 180px;
  height: 72px;
  width: 72px;
  margin-right: 10px;
`;

export const UserInfo = styled.View`
  flex-direction: column;
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

export const ListHeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const ListHeaderCategories = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 45%;
`;

export const CategoryTitle = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: ${props => (props.selected ? '#7D40E7' : '#666')};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
`;

export const LoadingContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
