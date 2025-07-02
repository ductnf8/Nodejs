import express from "express";
import {protectRoute} from "../middleware/auth.js";
import {getMessages, getUsersForSidebar, markMessageAsSeen, sendMessage} from "../controllers/messageController.js";

const messageRoute = express.Router();

messageRoute.get('/user', protectRoute, getUsersForSidebar)
messageRoute.get('/:id', protectRoute, getMessages)
messageRoute.put('/mark/:id', protectRoute, markMessageAsSeen)
messageRoute.post('/send/:id', protectRoute, sendMessage)

export default messageRoute;