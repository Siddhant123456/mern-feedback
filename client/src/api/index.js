import axios from 'axios';

const url = "http://localhost:5000/feedbacks";

export const fetchfeedbacks = () => axios.get(url);

export const createFeedback = (newFeedback) => axios.post(url , newFeedback);

export const likeFeedback = (id) => axios.patch(`${url}/${id}/likefeedback`);