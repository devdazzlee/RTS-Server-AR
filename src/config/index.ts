export const config = {
  port: process.env.PORT || 8000,
  env: process.env.NODE_ENV || "development",
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/express-mongo",
};
