const users = require('./data.json')

exports.usersController = (req, res) =>
{
  res.json({
    usersList: users
  })
}

// module.exports = usersController;