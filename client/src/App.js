import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {getFeedbacks} from './actions/feedbacks';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFeedback from './components/Feedbacks/AddFeedback';
import FeedbacksList from './components/Feedbacks/FeedbacksList';
import NavbarComp from './components/UI/Navbar';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeedbacks())
  }, [dispatch])


  
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
          <Route path = "/feedbacklist" exact component = {FeedbacksList}></Route>
          <Route path = "/" exact component = {AddFeedback}></Route>
      
      </Switch>
      
    </BrowserRouter>
  );
};

export default App;
