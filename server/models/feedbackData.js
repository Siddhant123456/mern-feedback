import mongoose from 'mongoose';


const feedbackSchema = mongoose.Schema({
    first_name : String,
    middle_name : {
        type : String,
        default : ""
    },
    last_name  : String,

    message : String,   
    title : String,
    likeCount : {
        type: Number,
        default: 0
    },
    createdAt : {
        type : Date,
        default: new Date()
    }
});

const FeedbackData = mongoose.model('FeedbackData',feedbackSchema);

export default FeedbackData;