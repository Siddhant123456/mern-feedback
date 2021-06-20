 import FeedbackData  from "../models/feedbackData.js"
 import mongoose from 'mongoose';

export const getFeedbacks = async (req,res) => {
    try {
        const feedbacks = await FeedbackData.find().sort([['likeCount' , 'descending']]);


        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(404).json({message  : error.message});        
    }
}

export const createFeedback = async (req,res) =>{
    
    const feedback = req.body;
    if(feedback.title === "male"){
        feedback.title = "Mr.";
    }
    else{
        feedback.title = "Ms.";
    }

    const newFeedback = new FeedbackData(feedback);
    
    try {
        await newFeedback.save();

        res.status(201).json(newFeedback);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
}

export const likeFeedback = async (req,res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No Post with that id")

    const feedback = await FeedbackData.findById(id);

    const updatedFeedback = await FeedbackData.findByIdAndUpdate(id, {likeCount : feedback.likeCount + 1}, {new : true})

    res.json(updatedFeedback);
}
