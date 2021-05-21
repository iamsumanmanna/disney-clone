import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import './App.css';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path = "/">
            <Login></Login>
          </Route>
          <Route exact path = "/home">
            <Home/>
          </Route>
          <Route exact path = "/detail/:id">
            <Detail/>
          </Route>
        </Switch>
      </Router>
      {/* <h2> Hello Youtube's Let  Bulid the Disney + Clone</h2> */}
    </div>
  );
}

export default App;
