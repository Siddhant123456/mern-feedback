import React from "react";

import { useSelector } from "react-redux";
import { likeFeedback } from "../../actions/feedbacks";
import {Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Card from "../UI/Card";

import classes from "./FeedbacksList.module.css";
const FeedbacksList = (props) => {
  const feedbacks = useSelector((state) => state.feedbacks);
  const dispatch = useDispatch();

  
  return (
    <div>
      {feedbacks.length === 0 ? (
        ""
      ) : (
        <Card className={classes.users}>
          <h4 style={{ textAlign: "center" }}>Feedback List</h4>

          <ul>
            {feedbacks.map((feedback) => (
              <li key={feedback.id}>
                
                {feedback.title}  <b>{feedback.first_name} {feedback.last_name} </b> says <b>{feedback.message}</b> <br /><FontAwesomeIcon icon={faHeart} />  {feedback.likeCount}

                <br />
              
                <br />
                <Button  onClick = {() => dispatch(likeFeedback(feedback._id))} variant = "contained" color = "secondary">Like</Button> 
                 <br />
                 
              </li>
            ))}
          </ul>
        </Card>
      )}
    </div>
  );
};

export default FeedbacksList;
