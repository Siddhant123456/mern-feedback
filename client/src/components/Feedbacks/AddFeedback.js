import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddFeedback.module.css";
import Wrapper from '../Helpers/Wrapper';
import {useDispatch} from 'react-redux';
import { createFeedback } from "../../actions/feedbacks";
const formVal = {
  first_name: "",
  last_name: "",
  middle_name : "",
  message: "",
  title : "",
};


const AddFeedback = (props) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(formVal);

  const addUserHandler = (e) => {
    e.preventDefault();
    if (formData.first_name.trim() === "") {
      alert("Please Enter first name");
      return;
    }
    if (formData.last_name.trim() === "") {
      alert("Please enter last name");
      return;
    }
    if (formData.message.trim() === "") {
      alert("Please enter your feedback")
      return;
    }
    
    dispatch(createFeedback(formData));
    props.history.push('/feedbacklist')
  };
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  

  return (
    <Wrapper>
      

      <Card className={classes.input}>
      <h4 style = {{textAlign:'center'}}>Enter Your Feedback</h4>
      
        <form onSubmit={addUserHandler}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            placeholder = "Enter First Name"
            className={classes.inputField}
            name="first_name"
            value={formData.fname}
            onChange={changeHandler}
          />
          
          <label htmlFor="mname">Middle Name</label>
          <input
            type="text"
            id="middle_name"
            name="middle_name"
            
            placeholder = "Enter Middle Name"
            className={classes.inputField}
            value={formData.mname}
            onChange={changeHandler}
          />

          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="last_name"
            
            placeholder = "Enter Last Name"
            className={classes.inputField}
            value={formData.lname}
            onChange={changeHandler}
          />

          <label htmlFor="sugg">Your Suggestions</label>
          <textarea
            name="message"
            id="sugg"
            rows={3}
            cols={40}
            
            placeholder = "Enter Feedback"
            value={formData.sugg}
            onChange={changeHandler}
          ></textarea>
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            className={classes.radio}
            value="male"
            name="title"
            onChange={changeHandler}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            className={classes.radio}
            value="female"
            name="title"
            onChange={changeHandler}
          />
          <br />
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddFeedback;
