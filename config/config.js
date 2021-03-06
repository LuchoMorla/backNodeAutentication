require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 6969,
    dbUser:  process.env.DB_USER,
    dbPassword:  process.env.DB_PASSWORD,
    dbHost:  process.env.DB_HOST,
    dbName:  process.env.DB_NAME,
    dbPort:  process.env.DB_PORT,
    apiKey: process.env.API_KEY,
    jwtSecret: process.env.JWT_KEY,
    temporalyJwtSecret: process.env.TEMPORALY_JWT_KEY,
    smtpMailKey: process.env.GPASS,
    smtpMail: process.env.SMAIL,
    receivermail: process.env.RMAIL,
  }
  
  module.exports = { config };
  