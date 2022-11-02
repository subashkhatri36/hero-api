import dotenv from 'dotenv';

dotenv.config();

export const {
    APP_PORT,
    APP_URL,
    DEBUG_MODE,
    DB_URL,
    JWT_SECRET,
    REFRESH_SECRET,
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE

} = process.env;