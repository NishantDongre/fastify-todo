const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.port || 5000,
};
