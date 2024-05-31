const User = require("../database/models/user");

class UserDAO {
  findByMail(mail) {
    return User.query().where("mail", mail);
  }
  findById(id) {
    return User.query().findById(id);
  }
}

module.exports = new UserDAO();
