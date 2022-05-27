import React from "react"
import Signup from "./Components/Signup"
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import PrivateRoute from "./Components/PrivateRoute"
import ForgotPassword from "./Components/ForgotPassword"
import UpdateProfile from "./Components/UpdateProfile"
import Home from "./Pages/Home"
import About from'./Pages/Menu/About/About'
import Newsroom from './Pages/Menu/Newsroom/Newsroom'
import Bureaus from './Pages/Menu/Bureaus/Bureaus'
import Initiatives from './Pages/Menu/Initiatives/Initiatives'
import Schemes from './Pages/Menu/Schemes/Schemes'
import Education from './Pages/Menu/Education/Education'

function App() {
  return (
      <div>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/news" component={Newsroom} />
              <Route path="/bureaus" component={Bureaus} />
              <Route path="/initiatives" component={Initiatives} />
              <Route path="/schemes" component={Schemes} />
              <Route path="/education" component={Education} />
              
            </Switch>
          </AuthProvider>
        </Router>
      </div>
  )
}

export default App
