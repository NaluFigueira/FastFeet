import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import DeliveryDetails from '~/pages/DeliveryDetails';
import ReportProblem from '~/pages/ReportProblem';
import DeliveryProblems from '~/pages/DeliveryProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DeliveryStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7D40E7',
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={{ title: 'Detalhes da encomenda' }}
      />
      <Stack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{ title: 'Informar problema' }}
      />
      <Stack.Screen
        name="DeliveryProblems"
        component={DeliveryProblems}
        options={{ title: 'Visualizar problemas' }}
      />
      <Stack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{ title: 'Confirmar entrega' }}
      />
    </Stack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: 'white',
        },
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DeliveryStack}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="menu" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <IoniconsIcon name="md-contact" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
