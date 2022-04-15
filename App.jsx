import React from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import Collector from './components/Collector/Collector'
import GodownHead from './components/GodownHead/GodownHead'
import Home from './shared/template/Home'
import Main from './shared/template/Main'
import User from './components/User/User'
import Shop from './shared/template/Shop'
import Login from './shared/template/Login'
import SignUp from './shared/template/SignUp'
import Feedback from './shared/template/Feedback'
import Notification from './shared/template/components/Notification'


const App = () => {
  return (
    <>
    <header/>
      <Switch>
        <Redirect from="/" to="/home" exact/>
        <Route path="/home" component={Main} exact/>
        <Route path="/login" component={Login} exact/>
        <Route path="/signUp" component={SignUp} exact/>
        <Route path="/feedback" component={Feedback} exact/>
        <Route path="/home/user" component={User} />
        <Route path="/home/collector" component={Collector} />
        <Route path="/home/godownHead" component={GodownHead} />
        <Route path="/home/shop" component={Shop} />

      </Switch>
      <Notification />
    </>
  )
}

export default App
