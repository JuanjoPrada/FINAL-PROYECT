const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//EndPoints

//Populate Restaurants
router.get("/getFavRestaurants", (req, res) => {

  const id = req.session.currentUser;

  User.findOne(req.session.currentUser)
    .select("favorites")
    .populate("favorites.restaurants")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favorites", err })
    );
});

//Populate Places
router.get("/getFavPlaces", (req, res) => {

  const id = req.session.currentUser;

  User.findOne(id)
    .select("favorites")
    .populate("favorites.places")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favorites", err })
    );
});

//Populate Events
router.get("/getFavEvents", (req, res) => {

  const id = req.session.currentUser;

  User.findOne(id)
    .select("favorites.events")
    .populate("favorites.events")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favorites", err })
    );
});

//Get All Together
router.get("/getFavs", (req, res) => {

  const id = req.session.currentUser;

  User.findOne(id)
    .select("favorites")
    .populate("favorites.restaurants favorites.places favorites.events ")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favorites", err })
    );
});

module.exports = router;
