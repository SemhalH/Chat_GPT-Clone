import express from'express'
import chatRoutes from './chats/chat.routes.js'

const mainRoutes = express.Router()
mainRoutes.use('/chat', chatRoutes)

export default mainRoutes 