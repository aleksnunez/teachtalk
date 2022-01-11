import React from 'react';
import './App.css';
import styled from 'styled-components';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
        <Header />
        <AppBody>
          <Sidebar />
          <Routes>
            <Route  exact path="/">
            </Route>
          </Routes>
        </AppBody>
        </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
  
`