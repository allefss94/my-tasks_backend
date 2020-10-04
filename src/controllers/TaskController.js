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
    try {
      await Task.findByIdAndUpdate(id, newTask);
      return response.status(201).send(newTask);
    } catch (error) {
      return response.send(error);
    }
  },

  async delete(request, response) {
    const { id } = request.params;
    try {
      await Task.findByIdAndDelete(id);
      return response.json('Task removed with success');
    } catch (error) {
      return response.send(error);
    }
  },
};
