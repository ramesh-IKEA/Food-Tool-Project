module.exports = {
    HOST: process.env.DB_HOST,
    USER: process.env.DB_USER_NAME,
    PASSWORD: process.env.DB_USER_NAME,
    DB: process.env.DB_NAME,
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };