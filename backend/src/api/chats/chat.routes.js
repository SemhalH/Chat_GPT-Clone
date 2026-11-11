import express from 'express'
import { createConversationController, getConversationController } from './controller/chat.controller.js';

const chatRoutes = express.Router()

chatRoutes.post("/conversations", createConversationController);

chatRoutes.get("/conversations", getConversationController);

export default chatRoutes