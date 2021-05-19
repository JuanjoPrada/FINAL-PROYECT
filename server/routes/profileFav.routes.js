const express = require("express");
const { isLoggedIn } = require("../middlewares");
const router = express.Router();
const User = require("../models/user.model");

//EndPoints

//Populate Restaurants
router.get("/getFavRestaurants", (req, res) => {
  const id = req.session.currentUser;

  User.findOne(id)
    .select("favouriteRestaurants")
    .populate("favouriteRestaurants")
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
    .select("favouritePlaces")
    .populate("favouritePlaces")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favourites", err })
    );
});

//Populate Events
router.get("/getFavEvents", (req, res) => {
  const id = req.session.currentUser;

  User.findOne(id)
    .select("favouriteEevents")
    .populate("favouriteEvents")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favorites", err })
    );
});

//Get All Together
router.get("/getFavs", isLoggedIn, (req, res) => {
  const id = req.session.currentUser._id;
  console.log("-------------------EL ID ALLTOGETHER", id);

  User.findById(id)
    .populate("favouriteRestaurants favouritePlaces favouriteEvents")
    .then((result) => res.json(result))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error fetching favorites", err })
    );
});

// //Manage favorites events
// router.post("/favPlaces/:id", (req, res) => {

//   const { id } = req.params;
//   const  currentUser  = req.session.currentUser;

//   User.findById(currentUser)
//     //.then(() => res.redirect(`/user/details/${id}`))
//     .catch((err) => console.log("Error!", err));
// });

//Manage favorites restaurants
router.post("/favRestaurants/:id", isLoggedIn, (req, res) => {
  const { id } = req.params;
  console.log("----------------EL ID", id);
  const currentUser = req.session.currentUser._id;
  console.log("--------------EL USER ID", currentUser);

  User.findById(currentUser).then((response) => {
    console.log(response.favouriteRestaurants.includes(id));
    const updateObj = response.favouriteRestaurants.includes(id)
      ? { $pull: { favouriteRestaurants: id } }
      : { $push: { favouriteRestaurants: id } };

    return User.findByIdAndUpdate(currentUser, updateObj)
      .then(() =>
        res.status(200).json({ code: 200, message: "Gestionado en favoritos :)" })
      )
      .catch((err) => console.log("Error!", err));
  });
});

//Manage favorites Places
router.post("/favPlaces/:id", isLoggedIn, (req, res) => {

  const { id } = req.params;
  const currentUser = req.session.currentUser._id;

  User.findById(currentUser).then((response) => {

    const updateObj = response.favouritePlaces.includes(id)
      ? { $pull: { favouritePlaces: id } }
      : { $push: { favouritePlaces: id } };

    return User.findByIdAndUpdate(currentUser, updateObj)
      .then(() =>
        res.status(200).json({ code: 200, message: "Gestionado en favoritos :)" })
      )
      .catch((err) => console.log("Error!", err));
  });
});

module.exports = router;
