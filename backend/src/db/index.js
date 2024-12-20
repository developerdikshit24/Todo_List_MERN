import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/Todo_List`)
        console.log(conn.connection.host);
    } catch (error) {
        console.log(" MongoDB Connection Error : ", error);
        process.exit(1)
    }
}

export default connectDB