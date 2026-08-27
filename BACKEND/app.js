import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import connectDB from "./src/config/mongo.config.js";
import auth_routes from './src/routes/auth.routes.js';
import user_routes from './src/routes/user.routes.js';
import short_url from './src/routes/short_url.route.js';
import { redirectFromShortUrl } from './src/controller/short_url.controller.js';
import { errorHandler } from './src/utils/errorHandler.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { attachUser } from './src/utils/attachUser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
dotenv.config({ path: path.join(__dirname, '.env') });
dotenv.config({ path: path.join(__dirname, '../.env') });

const frontendDistPath = path.join(__dirname, '../FRONTEND/dist');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = process.env.CLIENT_URL
    ? [process.env.CLIENT_URL, 'http://localhost:5173', 'http://localhost:3000']
    : ['http://localhost:5173', 'http://localhost:3000'];

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin) || process.env.NODE_ENV === 'production') {
            callback(null, true);
        } else {
            callback(null, true);
        }
    },
    credentials: true
}));

app.use(cookieParser());
app.use(attachUser);

// Serve static assets built by frontend in production / single URL hosting
if (fs.existsSync(frontendDistPath)) {
    app.use(express.static(frontendDistPath));
}

app.use("/api/user", user_routes);
app.use("/api/auth", auth_routes);
app.use("/api/create", short_url);

app.get("/:id", redirectFromShortUrl);

// SPA fallback for frontend client-side routes (Express 5 compatible)
app.use((req, res, next) => {
    if (req.method === 'GET') {
        const indexPath = path.join(frontendDistPath, 'index.html');
        if (fs.existsSync(indexPath)) {
            return res.sendFile(indexPath);
        }
    }
    next();
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
