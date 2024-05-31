const userDAO = require("../dao/user");

class UserService {
  getUserByMail(mail) {
    return userDAO.findByMail(mail);
  }
  getUserById(id) {
    return userDAO.findById(id);
  }
}

module.exports = new UserService();
