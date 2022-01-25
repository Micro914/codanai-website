import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/proyecto1';
import AvisoDePrivacidad from './pages/AvisoDePrivacidad/index';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/proyecto1" component={SigninPage} exact/>
        <Route path="/aviso_privacidad" component={AvisoDePrivacidad} exact/>
      </Switch>
    </Router>
  );
}

export default App;
