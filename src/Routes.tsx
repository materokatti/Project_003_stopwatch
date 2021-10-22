import React from "react";
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Main} from "./pages/Main";
import {Stopwatch} from "./pages/Stopwatch";
import {NaverSearch} from "./pages/NaverSearch";
import {TodoList} from "./pages/TodoList";

const Routes: React.FC = () => {
  return (
    <RouterWrapper>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/stopwatch' component={Stopwatch} />
          <Route exact path='/naversearch' component={NaverSearch} />
          <Route exact path='/todo' component={TodoList} />
        </Switch>
      </Router>
    </RouterWrapper>
  );
};

export default Routes;

const RouterWrapper = styled.div`
  margin: 0 auto;
  background-color: #fff;
  min-height: 100vh;
  height: 100%;
`;
