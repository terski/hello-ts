import dotenv from 'dotenv';
dotenv.config({ path: 'dev.env' });

export const hello = () => {
    console.log('Hello world!');
};

hello();
