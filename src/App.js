import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

//pages
import Home from './pages/Home'
import Breeds from './pages/Breeds'
import Sizes from './pages/Sizes'

//components
import Footer from './components/Footer'

export default function App(){
  return(
    <Switch>
      <div>
        <Route path='/' exact component={Home}/>
        <Route path='/breeds' component={Breeds}/>
        <Route path='/sizes' component={Sizes}/>
        <Footer />
      </div>
    </Switch>
  );
}