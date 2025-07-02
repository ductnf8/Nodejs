import mongoose from 'mongoose'

//Function to connect to the mongodb db
export const connectDB = async () => {
    try {

        mongoose.connection.on('connected', () => console.log('DB Connected'))

        await mongoose.connect(`${process.env.MONGODB_URI}/CHAT-APP`)
    } catch (err) {
        console.log(err)
    }
}