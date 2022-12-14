import React from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
import MaleModels from './Pages/MaleModels';
import FemaleModels from './Pages/FemaleModels';
import Contact from './Pages/Contact';

function App() {



  return (
    <Switch>
      <Route exact path='/'>
         <Redirect to="/home" />
      </Route>
       <Route exact path="/home">
         <Home/>
       </Route>
       <Route exact path="/models-females">
         <FemaleModels/>
       </Route>
       <Route exact path="/models-males">
         <MaleModels/>
       </Route>
     <Route path='/contact'>
      <Contact/>
     </Route>
       <Route path='*'>
       </Route>
     </Switch>
  )
}

export default App;
