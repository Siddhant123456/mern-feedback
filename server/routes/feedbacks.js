import express from 'express';
import { getFeedbacks , createFeedback , likeFeedback} from '../controllers/feedbacks.js';

const router = express.Router();


router.get('/', getFeedbacks)

router.post('/',createFeedback)

router.patch('/:id/likefeedback', likeFeedback)

export default router;