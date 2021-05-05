import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginCard from './components/LoginCard'

function App() {

  return (
    <Router>
      <Route exact path='/login' component={LoginCard} />
    </Router>
  );
}

export default App;
