const fp = require("fastify-plugin");
class TodoRepository {
    constructor(db) {
        this.db = db;
    }

    async getAll() {
        return this.db.todos;
    }

    async create(todotext) {
        const todoList = this.db.todos;
        this.db.todos.push({
            text: todotext,
            id: todoList.length,
        });
        return this.db.todos;
    }

    async getOne(id) {
        console.log(this.db.todos);
        return this.db.todos.find((todo) => todo.id == id);
    }

    async deleteOne(id) {
        const index = this.db.todos.findIndex((todo) => todo.id == id);
        if (index !== -1) {
            this.db.todos.splice(index, 1);
            return true;
        }
        return false;
    }

    async deleteAll() {
        this.db.todos = [];
        return this.db.todos;
    }
}

async function todoRepository(fastify, options) {
    const { db } = fastify;
    const repo = new TodoRepository(db);
    fastify.decorate("todoRepository", repo);
}

module.exports = fp(todoRepository);
