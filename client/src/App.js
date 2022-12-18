// import React,{ Fragment } from 'react';
import {Route} from 'react-router-dom'
import Home from './Pages/Home';
import MaleModels from './Pages/MaleModels';
import FemaleModels from './Pages/FemaleModels';


function App() {
  return (
    <div>
     <Route exact path="/">
      <Home/>
     </Route>
     <Route exact path="/models-females">
      <FemaleModels/>
     </Route>
     <Route exact path="/models-males">
       <MaleModels/>
     </Route>
    </div>

  )
}

export default App;
