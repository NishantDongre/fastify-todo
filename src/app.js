const fp = require("fastify-plugin");
const apiRouter = require("./routes/api/apiRouter");
async function app(fastify, option) {
    fastify.register(apiRouter, { prefix: "/api" });
}

module.exports = fp(app);
