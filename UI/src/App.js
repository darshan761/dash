import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/LandingPage/LandingPage';
import DeskExercise from './Components/DeskExercise/DeskExercise';
import AskMeAnything from './Components/AMA/AskMeAnything';
import UpskillPage from './Components/UpskillPage/Upskill';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/deskexercise" component={DeskExercise}/>
            <Route exact path="/upskillzo" component={UpskillPage}/>
            <Route exact path="/askmeanything" component={AskMeAnything}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;