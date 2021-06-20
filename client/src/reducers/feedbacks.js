
export const feedbacks =  (feedbacks  = [],action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
            
        case 'CREATE' :
            return [...feedbacks , action.payload];
            
        case 'UPDATE' :
            return feedbacks.map((feedback) => feedback._id === action.payload._id ? action.payload : feedback);
        default:
            return feedbacks;
    }
}