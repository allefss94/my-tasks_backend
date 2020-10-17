const User = require('../models/User');

module.exports = {
  async UserAuthentication(request, response, next) {
    const { name, password } = request.body;
    const user = await User.findOne().where('name').equals(name);
    if (user !== null) {
      if (user.name === name && user.password === password) {
        return next();
      }
      return response.status(404).json('Authentication fail');
    }
    return response.status(404).json('User not find');
  },
};
