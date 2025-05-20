import mongoose from "mongoose"

const connectDB = async () => {
    const dbUrl = `${process.env.MONGODB_URI}/prescripto`
    console.log("🔗 Connecting to MongoDB at:", dbUrl)

    mongoose.connection.on('connected', () => console.log("✅ Database Connected"))
    mongoose.connection.on('error', (err) => console.error("❌ DB Connection Error:", err))

    try {
        await mongoose.connect(dbUrl, {
            
        })
    } catch (error) {
        console.error("❌ Initial Connection Error:", error)
    }
}

export default connectDB
