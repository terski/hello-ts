import dotenv from 'dotenv';
import { createServer } from './yoga';

dotenv.config({ path: 'dev.env' });

const server = createServer();
server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL,
        },
    },
    options => {
        console.log(`Running on http://localhost:${options.port}`);
    }
);
