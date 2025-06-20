import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tnduc27:d2782003@cluster0.q05lzdp.mongodb.net/food-del').then(() => console.log('DB Connected'))
}