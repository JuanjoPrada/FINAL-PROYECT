const User = require("./../models/user.model");
const express = require("express");
const router = express.Router();

router.post("/add-product/:productId", isLoggedIn, checkRoles("CLIENT"), (req, res, next) => {
    
    const favId = req.params.favouritesId;
    const { _id } = req.session.currentUser;

    User
        .findById(_id)
        .then((user) => {
            User
                .findById(user.favourites)
                .then((favourite) => {

        let favourites;
        user.favourites.forEach((elem) => {
          if (elem.favourites._id.toString() === favId) {
            favourite = elem;
          }
        });
        if (product) {
          product.amount = amount;
        } else {
          let newProduct = {
            product: new mongoose.mongo.ObjectId(productId),
            amount: amount,
          };
          cart.products.push(newProduct);
        }
        cart.save();
      });
      res.json("ok");
    });
  }
);
