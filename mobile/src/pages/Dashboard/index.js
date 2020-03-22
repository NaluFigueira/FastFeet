import React, { useEffect, useState } from 'react';
import { FlatList, Alert, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import noImage from '~/assets/noImage.png';

import { signOut } from '~/store/modules/auth/actions';
import api from '~/services/api';

import DeliveryCard from '~/components/DeliveryCard';

import {
  Container,
  Header,
  ProfileSection,
  ProfilePicture,
  UserInfo,
  InfoText,
  InfoLabel,
  ListHeaderContainer,
  ListHeaderCategories,
  CategoryTitle,
  LoadingContainer,
} from './styles';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  async function loadDeliveries() {
    try {
      const response = await api.get(`deliveryman/${user.id}/deliveries`, {
        params: {
          delivered,
        },
      });
      setDeliveries(response.data);
    } catch (error) {
      Alert.alert(
        'Erro ao carregar entregas',
        'Não foi possível carregar suas entregas!'
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    loadDeliveries();
  }, [delivered]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <ProfileSection>
          <ProfilePicture
            source={user.avatar ? { uri: user.avatar.url } : noImage}
          />
          <UserInfo>
            <InfoLabel>Bem vindo de volta,</InfoLabel>
            <InfoText>{user.name}</InfoText>
          </UserInfo>
        </ProfileSection>
        <Icon
          name="exit-to-app"
          size={28}
          style={{ color: '#E74040' }}
          onPress={handleSignOut}
        />
      </Header>
      <ListHeaderContainer>
        <InfoText>Entregas</InfoText>
        <ListHeaderCategories>
          <CategoryTitle
            onPress={() => setDelivered(false)}
            selected={!delivered}
          >
            Pendentes
          </CategoryTitle>
          <CategoryTitle
            onPress={() => setDelivered(true)}
            selected={delivered}
          >
            Entregues
          </CategoryTitle>
        </ListHeaderCategories>
      </ListHeaderContainer>
      {loading ? (
        <LoadingContainer>
          <ActivityIndicator size="large" color="#7D40E7" />
        </LoadingContainer>
      ) : (
        <FlatList
          data={deliveries}
          keyExtractor={delivery => delivery.id.toString()}
          renderItem={({ item }) => (
            <DeliveryCard
              id={item.id}
              city={item.recipient.city}
              createdAt={item.createdAt}
              start_date={item.start_date}
              end_date={item.end_date}
            />
          )}
        />
      )}
    </Container>
  );
}
