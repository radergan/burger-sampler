var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgers = {
        burger: data
      };
      console.log(burgers);
      res.render("index", burgers);
    });
  });

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name, devoured"], [req.body.burger_name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
});
  
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    burger.updateOne({devoured: req.body.devoured}, condition, function(result) {
        res.json;
      }
    );
});

module.exports = router;