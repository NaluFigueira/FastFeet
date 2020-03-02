import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';

import DeliveriesList from '../pages/DeliveriesList';
import DeliveryForm from '../pages/DeliveryForm';

import DeliverymenList from '../pages/DeliverymenList';
import DeliverymanForm from '../pages/DeliverymanForm';

import RecipientsList from '../pages/RecipientsList';
import RecipientForm from '../pages/RecipientForm';

import DeliveryProblems from '../pages/DeliveryProblems';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" component={DeliveriesList} isPrivate />
      <Route path="/delivery/register" component={DeliveryForm} isPrivate />
      <Route
        path="/delivery/edit"
        render={() => <DeliveryForm edit />}
        isPrivate
      />

      <Route path="/deliverymen" component={DeliverymenList} isPrivate />
      <Route path="/deliveryman/register" component={DeliverymanForm} />
      <Route
        path="/deliveryman/edit"
        render={() => <DeliverymanForm edit />}
        isPrivate
      />

      <Route path="/recipients" component={RecipientsList} isPrivate />
      <Route path="/recipient/register" component={RecipientForm} isPrivate />
      <Route
        path="/recipient/edit"
        render={() => <RecipientForm edit />}
        isPrivate
      />

      <Route path="/delivery_problems" component={DeliveryProblems} isPrivate />
    </Switch>
  );
}
