import React,{Suspense} from 'react';
import { Redirect, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home';
const MaleModels = React.lazy(()=> import('./Pages/MaleModels'));
const FemaleModels = React.lazy(()=> import('./Pages/FemaleModels'));
const Contact = React.lazy(()=> import ('./Pages/Contact'));
// import LoadingSpinner from './Component/UI/LoadingSpinner';

function App() {

  return (
    <Suspense fallback={
      <h1>....Page is loading</h1>
    }>
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
    </Suspense>
  )
}

export default App;
