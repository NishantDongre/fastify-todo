async function getAllTodos(req, res) {
    const { todoService } = this;
    const response = await todoService.getAll();
    return res.status(200).send({ response });
}

async function createTodo(req, res) {
    const { todoService } = this;

    const response = await todoService.create(req.body.todotext);

    return res.status(201).send({ response });
}

async function getOneTodo(req, res) {
    const { todoService } = this;
    console.log(req.params.id);
    const response = await todoService.getOne(req.params.id);

    return res.status(200).send({ response });
}

async function deleteOne(req, res) {
    const { todoService } = this;
    const id = req.params.id;

    const deleted = await todoService.deleteOne(id);
    if (deleted) {
        return res.status(200).send({ message: "deleted" });
    } else {
        return res.status(404).send({ message: "Todo not found" });
    }
}

async function deleteAll(req, res) {
    const { todoService } = this;

    const response = await todoService.deleteAll();

    return res.status(200).send({ message: "deleted all" });
}

module.exports = {
    getAllTodos,
    getOneTodo,
    createTodo,
    deleteAll,
    deleteOne,
};
