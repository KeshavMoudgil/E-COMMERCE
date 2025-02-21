const {validationResult} = require('express-validator');
const { firstNameValidator, lastNameValidator, emailValidator, passwordValidator, confirmPasswordValidator, userTypeValidator } = require("./validation");
const bcrypt = require('bcrypt');
const User = require('../model/user');
const user = require('../model/user');

exports.signup = [
  firstNameValidator,
  lastNameValidator,
  emailValidator,
  passwordValidator,
  confirmPasswordValidator,
  userTypeValidator,
  
  async (req, res, next) => {
    const {firstName, lastName, email, password, userType} = req.body;

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errorMessages: errors.array().map(err => err.msg),
      });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({firstName, lastName, email, password: hashedPassword, userType});
      await user.save();
      res.status(201).json({message: "Signup successful"});
    } catch (error) {
      res.status(500).json({errorMessages: [error.message]});
    }
  }
];

