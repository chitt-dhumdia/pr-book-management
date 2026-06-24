import mongoose from "mongoose"
import envConfig  from "./dotenv.js"

const db =async()=>{

    try {
        mongoose.connect(envConfig.MONGODB_URL)
        console.log("db connected")
    } catch (error) {
        console.log("db not connected");   
    }
}

export default db();
