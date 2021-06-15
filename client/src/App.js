import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/views/Home'
import Signin from './components/views/Signin'
import Signup from './components/views/Signup'
import UserContextProvider from './components/contexts/UserContext'
import FoodContextProvider from './components/contexts/FoodContext';

function App() {
  return (
    <UserContextProvider>
      <FoodContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
          </Switch>
        </Router>
      </FoodContextProvider>
    </UserContextProvider>
    
  );
}

export default App;
