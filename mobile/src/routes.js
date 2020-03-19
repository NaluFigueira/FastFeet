import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';
import DeliveryDetails from '~/pages/DeliveryDetails';
import ReportProblem from '~/pages/ReportProblem';
import DeliveryProblems from '~/pages/DeliveryProblems';
import ConfirmDelivery from '~/pages/ConfirmDelivery';

const Stack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7D40E7',
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
        name="Profile"
        component={Profile}
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
