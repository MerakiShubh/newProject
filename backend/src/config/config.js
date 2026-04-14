import dotenv from "dotenv";

dotenv.config();

const _config = {
  nodeEnv: process.env.NODE_ENV,
  frontendUrl: process.env.FRONTEND_URL,
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
};

export const config = {
  get(key) {
    const value = _config[key];
    if (!value) {
      console.error(
        `The ${key} is not found. Make sure pass correct environment variable`,
      );
      process.exit();
    }
    return _config[key];
  },
};
