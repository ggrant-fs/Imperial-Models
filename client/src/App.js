import { Fragment } from 'react';
import React from 'react';
import Home from './Screens/Home'
import SubscriptionModal from './Component/Modal/SubscriptionModal';

function App() {
  return (
    <Fragment>
      <SubscriptionModal>
        
      </SubscriptionModal>
      <Home />
    </Fragment>
  )
}

export default App;
