import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/views/Home'
import Signin from './components/views/Signin'
import ManagerContextProvider from './components/contexts/ManagerContext'
import FoodContextProvider from './components/contexts/FoodContext';

function App() {
  return (
    <ManagerContextProvider>
      <FoodContextProvider>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signin' component={Signin} />
          </Switch>
        </Router>
      </FoodContextProvider>
    </ManagerContextProvider>
  );
}

export default App;
