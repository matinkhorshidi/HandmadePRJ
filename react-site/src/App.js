import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './styles/globals.css';
import './styles/css/bootstrap.min.css';
import 'swiper/css/swiper.css';
import Slider from './components/Slider/Slider';
import Rotation from './components/Rotation/Rotation';
import { Route, Switch } from 'react-router-dom';
import Privacy from './pape/Privacy';
import Terms from './pape/Terms';
import Main from './pape/Main';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      {/* <Route path="/terms">
              <Terms />
          </Route>
          <Route path="/privacy_policy">
              <Privacy />
          </Route> */}
    </Switch>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Counter />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <span>
    //       <span>Learn </span>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux
    //       </a>
    //       <span>, </span>
    //       <a
    //         className="App-link"
    //         href="https://redux-toolkit.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Redux Toolkit
    //       </a>
    //       ,<span> and </span>
    //       <a
    //         className="App-link"
    //         href="https://react-redux.js.org/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         React Redux
    //       </a>
    //     </span>
    //   </header>
    // </div>
  );
}

export default App;
