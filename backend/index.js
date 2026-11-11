import 'dotenv/config'
import express from 'express'
import db from './db/db.config.js'
import mainRoutes from './src/api/main.routes.js'
import { errorHandler } from './src/middleware/error_handler.js'
import cors from "cors";


const app = express()

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', mainRoutes)
app.use(errorHandler)

async function startServer() {
  try {
    const connection = await db.getConnection()
          connection.release()
    app.listen(3888, err => {
      if (err){
        throw err;
      }
      console.log('Server is running on port 3888')
})
  }catch (error) {
    console.error('Error starting server:', error.message);
  }
}
startServer()

