const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", function (req, res, next) {
  const limit = parseInt(req.query.limit) || 10;
  const page = parseInt(req.query.page) || 1;

  res.header("Content-Type", "application/json");

  fs.readFile("./data/startlist.json", (err, json) => {
    if (err) {
      console.error("Error reading database file:", err);
      res.status(500).json({ error: "Unable to read the database file" });
      return;
    }

    try {
      const obj = JSON.parse(json);

      // Calculate the starting and ending indexes for pagination
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      // Extract the items for the current page
      const paginatedData = obj.slice(startIndex, endIndex);

      // Respond with the paginated data
      res.json(paginatedData);
    } catch (parseError) {
      console.error("Error parsing the database file:", parseError);
      res.status(500).json({ error: "Error parsing the database file" });
    }
  });
});

module.exports = router;
