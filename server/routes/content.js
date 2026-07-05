const express = require("express");
const router = express.Router();
const Content = require("../models/Content");

router.get("/", async (req, res) => {
  const items = await Content.find();
  res.json(items);
});

router.post("/", async (req, res) => {
  const item = await Content.create(req.body);
  res.status(201).json(item);
});

module.exports = router;