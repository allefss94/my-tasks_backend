const Task = require('../models/Task');

module.exports = {
  async index(request, response) {
    const { taskOwner } = request.body;
    const tasks = await Task.find().where('owner').equals(taskOwner);
    return response.send(tasks);
  },

  async create(request, response) {
    const newTask = await Task.create(request.body);
    return response.status(201).send(newTask);
  },

  async update(request, response) {
    const { id } = request.params;
    const newTask = request.body;
    await Task.findByIdAndUpdate(id, newTask);
    return response.status(201).send(newTask);
  },

  async delete(request, response) {
    const { id } = request.params;
    await Task.findByIdAndDelete(id);
    return response.json('Task removed with success');
  },
};
