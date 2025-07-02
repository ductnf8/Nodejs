import express from 'express';
import "dotenv/config"
import cors from 'cors'
import http from 'http'
import {connectDB} from "./lib/db.js";
import userRoutes from "./routes/userRoutes.js";
import messageRoute from "./routes/messageRoutes.js";
import {Server} from "socket.io";

// Create Express app and HTTP server
const app = express()
const server = http.createServer(app)

// Initialize socket.io server
export const io = new Server(server, {
    cors: {origin: '*'}
})

// Store online  
export const userSocketMap = {} //{ userId: socketId }

// Socket.io connection handler
io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId
    console.log('User connected', userId)

    if (userId) userSocketMap[userId] = socket.id

// Emit online users to all connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap))

    socket.on('disconnect', () => {
        console.log('User disconnected', userId)
        delete userSocketMap[userId]
        io.emit('getOnlineUsers', Object.keys(userSocketMap))
    })
})


//Middleware setup
app.use(express.json({limit: '4mb'}))
app.use(cors())


//  Routes setup
app.use('/api/status', (req, res) => res.send('Server is live'))
app.use('/api/auth', userRoutes)
app.use('/api/messages', messageRoute)


// Connect to MongoDB
await connectDB()

const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))