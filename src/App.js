import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { AppBody } from './app.style';

import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from './firebase';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
        <>
        <Header />
        <AppBody>
          <Sidebar />
          <Chat />
          <Routes>
            <Route  exact path="/">
            </Route>
          </Routes>
        </AppBody>
        </>
        )}
    </Router>
    </div>
  );
}

export default App;

