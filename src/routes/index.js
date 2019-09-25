import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Dashboard from '~/pages/Dashboard';
import New_Car from '~/pages/New_Car';
import Edit_Car from '~/pages/Edit_Car';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/new" component={New_Car} />
      <Route path="/edit/:id" component={Edit_Car} />
      <Route
        path="/500"
        component={() => <h1>Error Server - API is offline</h1>}
      />
      <Route path="/404" component={() => <h1>404 - Resource not found</h1>} />
    </Switch>
  );
}
