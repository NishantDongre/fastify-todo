const app = require("./app");
const { PORT } = require("./config/serverConfig");
const fastify = require("fastify")({
    logger: true,
});
fastify.register(app);
fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    console.log(`Fastify Server Started on PORT: ${PORT}`);
});
