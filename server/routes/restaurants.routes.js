const express = require("express");
const router = express.Router();
const { capitalizeText } = require("./../utils/index");

const Restaurant = require("./../models/restaurant.model");

router.get("/getAllRestaurants", (req, res) => {
  Restaurant.find()
    .select("name city foodType image cost")
    .then((response) => res.json(response))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching restaurants", err })
    );
});

router.get("/getAllRestaurants/:city", (req, res) => {
  let city = req.params.city;
  city = capitalizeText(city);

  Restaurant.find({ city })
    .select("name city foodType image cost")
    .then((response) => res.json(response))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching restaurants", err })
    );
});

router.get("/getOneRestaurant/:restaurant_id", (req, res) => {
  Restaurant.findById(req.params.restaurant_id)
    .then((response) => res.json(response))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching restaurant", err })
    );
});

router.post("/newRestaurant", (req, res) => {
  const restaurant = req.body;

  Restaurant.create(restaurant)
    .then((response) => res.json(response))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error saving restaurant", err })
    );
});

router.put("/editRestaurant/:restaurant_id", (req, res) => {
  Restaurant.findByIdAndUpdate(req.params.restaurant_id, req.body)
    .then((response) => res.json(response))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error editing restaurant", err })
    );
});

router.post("/deleteRestaurant/:restaurant_id", (req, res) => {
  Restaurant.findByIdAndDelete(req.params.restaurant_id)
    .then(() =>
      res.json({ code: 202, message: "Restaurant deleted successfully" })
    )
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error editing restaurant", err })
    );
});

module.exports = router;
