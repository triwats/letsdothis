const express = require("express");
const fs = require("fs");
const router = express.Router();

/* GET listing based on query. */
router.get("/", (req, res, next) => {
  // Get the eventTitle query parameter
  const eventTitleFilter = req.query.eventTitle;

  const existingData = [];

  fs.readFile("./data/startlist.json", (err, data) => {
    if (err) {
      console.error("Could not read startlist.json");
      console.error(err);
      res.status(500).json({ message: "Could not read startlist.json 😱" });
      return;
    }

    try {
      const parsedData = JSON.parse(data);
      console.log("INFO: Parsed JSON data from file");

      // Filter based on the item where item is each JSON object
      const filteredData = parsedData.filter((item) => {
        return item.eventTitle === eventTitleFilter;
      });

      res.json(filteredData);
    } catch (parseError) {
      console.error("ERROR: Could not parse JSON data from file");
      console.error(parseError);
      res.status(500).json({ message: "Could not parse JSON data from file 😱" });
    }
  });
});

module.exports = router;
