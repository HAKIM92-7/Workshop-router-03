import './App.css';
import Home from './components/Home'
import Contact from './components/Contact'
import Help from './components/Help'
import Navbar from './components/Navbar'
import ProductDetails from './components/ProductDetails'
import {Route , Switch} from 'react-router-dom'
import Admin from './components/Admin';
import { useState } from 'react';

function App() {

  const [isConnected , setIsConnected] =useState(false)


  return (
    <div className="App">
  <Navbar isConnected={isConnected} setIsConnected={setIsConnected} />  

  <Switch>
  
  <Route exact path="/"  component={Home} />

  <Route path="/contact" component={Contact} />

  <Route path="/help/:info" render={(props)=><Help text="i'am the help component" {...props} />} />

  <Route path="/details/:id"   component={ProductDetails} />

  <Route path="/admin" render={(props) => <Admin  isConnected={isConnected}  {...props}/>} />

  </Switch>





    </div>
  );
}

export default App;
