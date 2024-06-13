const {
    getAllTodos,
    createTodo,
    getOneTodo,
    deleteOne,
    deleteAll,
} = require("../../../../controllers/todoController");

async function todoRouter(fastify, option) {
    fastify.get("/", getAllTodos);
    fastify.post("/", createTodo);
    fastify.get("/:id", getOneTodo);
    fastify.delete("/:id", deleteOne);
    fastify.delete("/", deleteAll);
}

module.exports = todoRouter;
