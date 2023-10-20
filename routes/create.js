const express = require("express");
const router = express.Router();
const fs = require("fs");

/* GET return error. */
router.get("/", function (req, res, next) {
  res.status(500).send("Incorrect HTTP Method");
});

/* POST new entry to startlist database. */
router.post("/", function (req, res) {
  const path = "./data/startlist.json";

  const jsonData = req.body; // Access the JSON object from the request body
  console.log("INFO: Received JSON data:", jsonData);

  // Create an empty list, remember the DB is a huge array of JSON objects
  // We therefore need somewhere to put the JSON object
  const existingData = [];

  try {
    const data = fs.readFileSync(path, "utf-8");
    existingData.push(jsonData);
    fs.writeFileSync(path, JSON.stringify(existingData, null, 2), "utf-8");
    console.log("INFO: Successfully created new entry");
  } catch (err) {
    console.log("ERROR: Could not parse JSON data from file");
    console.log(err);
    res.status(500).send("Could not parse JSON data from file" );
    return;
  }

  res.status(200).json({ message: "New entry created" });
});

module.exports = router;
