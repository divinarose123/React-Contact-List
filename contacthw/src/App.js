import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import ContactList from './contactList'
import ContactDetail from './contactDetail'


function App() {
  return <div className="App">
  <Router>
    <Route path="/" exact component={ContactList}/>
    <Route path="/contacts/:id" component={ContactDetail}/>
  </Router>
      
  </div>
}

export default App;
