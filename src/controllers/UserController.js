const User = require('../models/User');

module.exports = {
  async index(request, response) {
    const users = await User.find();
    return response.send(users);
  },

  async create(request, response) {
    const newUser = request.body;
    try {
      await User.create(newUser);
    } catch (error) {
      return response.json('This user already exists');
    }
    return response.send(newUser);
  },
  async update(request, response) {
    const { id } = request.params;
    const userUpdate = request.body;
    await User.findByIdAndUpdate(id, userUpdate);
    return response.send(userUpdate);
  },
  async delete(request, response) {
    const { id } = request.params;
    await User.findByIdAndDelete(id);
    return response.json('User removed with success');
  },
};
