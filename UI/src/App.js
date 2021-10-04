import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/LandingPage/LandingPage';
import DeskExercise from './Components/DeskExercise/DeskExercise';
import AskMeAnything from './Components/AMA/AskMeAnything';
import UpskillPage from './Components/UpskillPage/Upskill';
import Blog from './Components/Blog/Blog';
import Course from './Components/Course/Course'
import Health from './Components/HealthLanding/Health'

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
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/health" component={Health}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;