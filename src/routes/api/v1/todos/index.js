async function todoRouter(fastify, option) {
    fastify.get("/", function (req, res) {
        return "todo";
    });
}

module.exports = todoRouter;
