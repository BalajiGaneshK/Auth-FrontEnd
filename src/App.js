import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Header from './Components/Header/header';
import RegistrationForm from './Components/Registration Components/registrationForm';
import LoginForm from './Components/Login Components/LoginForm';
import MainPage from './Components/MainPage';

function App() {

  const [headerTitle, setHeaderTitle] = useState('Register');
  return (
    <Router>
    <div className="App">
      <Header title={headerTitle} />
        <Switch>
          <Route exact path="/">
            <RegistrationForm setHeaderTitle={ setHeaderTitle} />
          </Route>

          <Route exact path="/login">
            <LoginForm setHeaderTitle={ setHeaderTitle}/>
          </Route>

          <Route exact path="/main">
            <MainPage setHeaderTitle={ setHeaderTitle} />
          </Route>

          
      </Switch>
      </div>
    </Router>
  );
}

export default App;
