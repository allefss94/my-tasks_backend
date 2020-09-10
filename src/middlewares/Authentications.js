const User = require('../models/User');

module.exports = {
  async UserAuthentication(request, response, next) {
    const { name, password } = request.body;
    const user = await User.findOne().where('name').equals(name);
    if (user !== null) {
      return user.name === name && user.password === password
        ? next()
        : response.json('Authentication fail');
    }
    return response.json('User not find');
  },
};
