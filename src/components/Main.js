import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import DondeAyudar from './DondeAyudar'
import AquiSeNecesita from './AquiSeNecesita'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/donde-ayudar' component={DondeAyudar}/>
      <Route path='/aqui-se-necesita' component={AquiSeNecesita}/>
    </Switch>
  </main>
)

export default Main
