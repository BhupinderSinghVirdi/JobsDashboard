const express = require("express");
const AccountModel = require("../models/AccountModel");
const router = express.Router();
const login = require("../routes/login");

//Read account
router.get("/getAccount", async (req, res) => {
  try {
    const accData = await AccountModel.findById({ id: req.body.id });
    res.json(accData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create Account with email
router.post("/createAccount", async (req, res) => {
  const newAccData = new AccountModel({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
  });

  try {
    const savedAcc = await newAccData.save();
    res.status(200).json(savedAcc);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//update account
router.put("/updateAccount", async (req, res) => {
  try {
    const id = req.body.id;
    const name = req.body.name;
    const options = { new: true };

    const result = await AccountModel.updateOne({ _id: id }, { $set: {'name' : name} });

    res.send(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete Account
router.delete("/deleteAccount", async (req, res) => {
  try {
    const id = req.body.id;
    const deleted = await AccountModel.findByIdAndDelete(id);
    res.send(`Document with ${deleted.name} has been deleted..`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Login a User into Account
router.post("/login", (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    res.status(400).json({
      message: `Bad Request. Please provide all details in the request.`,
    });
  }

  login.registerUser(name, email, password)
    .then((data) => {
      res
        .cookie("token", data.token)
        .status(200)
        .redirect("/getAcccount");
    })
    .catch((err) => {
      res.status(500).json({
        message: `Server error: ${err}`,
      });
    });
});

module.exports = router;