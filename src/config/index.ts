
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.join((process.cwd(),".env"))});

export const config = {
    port: process.env.PORT,
    database_url: process.env.DATABASE_URL,
    SECRECT_KEY : process.env.JWT_SECRET_KEY,


    SERVER_END_POINT :  process.env.SERVER_END_POINT,
}

