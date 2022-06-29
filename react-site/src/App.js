import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './styles/globals.css';
import './styles/css/bootstrap.min.css';
import 'swiper/css/swiper.css';
import { Route, Switch } from 'react-router-dom';
import Main from './pape/Main';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
    </Switch>
  );
}

export default App;
