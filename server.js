import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cookieParser from "cookie-parser";
import apiRoutes from "./src/routes/index.js";
import cors from "cors"

dotenv.config();
const PORT = process.env.PORT || 5000;



const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.NODE_ENV === 'production' 
        ? [
            "https://cinebook.netlify.app",
            "https://cinebook-frontend.netlify.app", 
            "https://cinebookproject.netlify.app",
            "https://cinebook.vercel.app",
            "https://cinebook-frontend.vercel.app",
            process.env.FRONTEND_URL
          ].filter(Boolean)
        : [
            "http://localhost:3000", 
            "http://localhost:5000", 
            "http://localhost:5002", 
            "http://localhost:5173", 
            "http://localhost:5174",
            "http://127.0.0.1:5173",
            "http://127.0.0.1:3000"
          ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}))

app.get("/", (req, res) => {
    res.send("Hello Welcome To CineBook");
});

app.use('/api', apiRoutes)
app.all("*", (req, res) => res.status(404).json({ message: "Route not found" }));






const start = async () => {
    // Allow skipping DB connect for local dev (e.g., when working offline):
    if (process.env.SKIP_DB_ON_START === 'true') {
        console.warn('SKIP_DB_ON_START=true — starting server without DB connection');
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
        return;
    }

    const ok = await connectDB();
    if (!ok) {
        console.error('Could not connect to MongoDB. Ensure `MONGO_URI` is correct and your Atlas cluster allows connections from your IP address.');
        console.error('If you want to start without a DB (development only), set SKIP_DB_ON_START=true in your .env');
        process.exit(1);
    }

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

start();

// Prevent unhandled rejections from crashing the dev server so frontend can still run
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

