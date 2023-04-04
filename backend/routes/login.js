const express = require("express");
const { default: mongoose } = require("mongoose");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");
let accounts = require("../models/AccountModel");

let methods = {
  registerUser: async (name, email, password) => {
    const OldUser = await userSchema.findOne({ email });
    if (OldUser) {
      return Promise.reject(`User Already Exists, please Login now.`);
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await userSchema.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );

    // save user token
    user.token = token;
    // return new user
    return user;
  },
  LoginUser: async (email, password) => {
    // Validate if user exist in our database
    const user = await userSchema.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      //Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;
      // user

      return user;
    } else {
      return Promise.reject("Invalid Credentials");
    }
  },
};

module.exports = methods;


