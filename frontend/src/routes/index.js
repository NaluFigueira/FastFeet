import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

import DeliveriesList from '../pages/DeliveriesList';
import DeliveryForm from '../pages/DeliveryForm';

import DeliverymenList from '../pages/DeliverymenList';
import DeliverymanForm from '../pages/DeliverymanForm';

import RecipientsList from '../pages/RecipientsList';
import RecipientForm from '../pages/RecipientForm';

import DeliveryProblems from '../pages/DeliveryProblems';

export default function Routes(){
  return(
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/deliveries" component={DeliveriesList} />
      <Route path="/delivery/register" component={DeliveryForm} />
      <Route path="/delivery/edit" render={() => <DeliveryForm edit={true} />} />

      <Route path="/deliverymen" component={DeliverymenList} />
      <Route path="/deliveryman/register" component={DeliverymanForm} />
      <Route path="/deliveryman/edit" render={() => <DeliverymanForm edit={true} />} />

      <Route path="/recipients" component={RecipientsList} />
      <Route path="/recipient/register" component={RecipientForm} />
      <Route path="/recipient/edit" render={() => <RecipientForm edit={true} />} />

      <Route path="/delivery_problems" component={DeliveryProblems} />
    </Switch>
  )
}
