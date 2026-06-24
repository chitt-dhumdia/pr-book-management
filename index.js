import express from "express"
import db from "./configs/db.js"
import cookieParser from "cookie-parser";
import dotenv from "dotenv"
import bookRoutes from "./routes/book.route.js"
import userRoutes from "./routes/user.route.js"


dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());
const PORT = 8081;
app.get('/', async (req,res) => {
    try {
        return res.json({message: "database connected" })
    } catch (error) {
        console.log(error.message);
        return res.json(error.message)
    }
})
app.use("/api",bookRoutes);
app.use("/api/user",userRoutes);

db;

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
    
}) 
