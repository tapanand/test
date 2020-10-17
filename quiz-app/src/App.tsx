import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import QuizComponent from "./components/quiz/QuizComponent";
import InstructionComponent from "./components/instruction/InstructionComponent";
import ResultComponent from "./components/result/ResultComponent";
import { createAppStore } from "./store";

const appStore = createAppStore();

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Quiz</p>
      </header>
      <Provider store={appStore}>
        <BrowserRouter>
          <Route path="/" exact component={InstructionComponent} />
          <Route path="/quiz" exact component={QuizComponent} />
          <Route path="/result" exact component={ResultComponent} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

// App.propTypes = {
//   store: PropTypes.object.isRequired
// }

export default App;
