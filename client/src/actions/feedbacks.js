
import * as api from '../api';

//Action Creators

export const getFeedbacks = () => async (dispatch) => {
    try {
        const {data} = await api.fetchfeedbacks();
        dispatch({type : 'FETCH_ALL', payload : data});
    } catch (error) {
        console.log(error.message);
    }
    

}

export const createFeedback = (feedback) => async (dispatch) => {
    try {
        const {data} = await api.createFeedback(feedback);
        console.log(data);

        dispatch({type : 'CREATE' , payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

export const likeFeedback = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeFeedback(id);

        dispatch({type : 'UPDATE' , payload : data});
    } catch (error) {
        
    }
}


api.fetchfeedbacks()