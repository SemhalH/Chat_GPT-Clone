import { createConversationService } from "../services/chat.service.js";
import {getRecentConversationRows} from '../services/chat.service.js'

export async function createConversationController(req, res) {
    try{
        console.log(req.body);

      const {question} = req.body;
      const result = await createConversationService(question);
      res.status(201).json({
              success: true,
              message: 'conversation posted successfully',
              data: result,
      });
    }catch(error){
        throw error;
    }
    
}

export async function getConversationController(req, res) {
    try {
      const result = await getRecentConversationRows(100);
      res.status(200).json({
        success: true,
        message: "conversations fetched successfully",
        data: {
          conversations: result,
        },
      });
    } catch (error) {
      throw error;
    }
  
}