const express = require("express");
const AccountModel = require("../models/AccountModel");
const router = express.Router();

//Read account
router.get("/getAccount", async (req, res) => {
  try {
    const accData = await AccountModel.find({ id: req.body.id });
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

    const result = await AccountModel.findByIdAndUpdate(id, name, options);

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

module.exports = router;
