import React from 'react';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import Button from '~/components/Button';
import noImage from '~/assets/noImage.png';

import {
  Container,
  ProfileInfo,
  ProfilePicture,
  InfoContainer,
  InfoLabel,
  InfoText,
} from './styles';

export default function Profile() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <ProfilePicture
        source={user.avatar ? { uri: user.avatar.url } : noImage}
      />
      <ProfileInfo>
        <InfoContainer>
          <InfoLabel>Nome completo</InfoLabel>
          <InfoText>{user.name}</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>E-mail</InfoLabel>
          <InfoText>{user.email}</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoLabel>Data de cadastro</InfoLabel>
          <InfoText>{format(new Date(user.createdAt), 'dd/MM/yyyy')}</InfoText>
        </InfoContainer>
        <Button
          backgroundColor="#E74040"
          loading={false}
          onPress={handleSignOut}
        >
          Logout
        </Button>
      </ProfileInfo>
    </Container>
  );
}
