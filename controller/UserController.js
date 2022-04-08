const User = require('../models/User');
const bcrypt = require('bcrypt');	

module.exports = {

  async index(req, res) {
    const users = await User.find({});
    return res.json(users);
  },

  async create(req, res) {
    const { name, email, password } = req.body;
    await bcrypt.hash(password, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({ error: err });
      }
      const user = await User.create({ name, email, password: hash });
      return res.json(user);
    });
  }
}