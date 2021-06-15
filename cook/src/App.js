import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/views/Home'
import Signin from './components/views/Signin'
import CookContextProvider from './components/contexts/CookContext'
import FoodContextProvider from './components/contexts/FoodContext';

function App() {
  return (
    <CookContextProvider>
      <FoodContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
          </Switch>
        </Router>
      </FoodContextProvider>
    </CookContextProvider>
  );
}

export default App;
