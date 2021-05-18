const express = require("express");
const router = express.Router();
const Places = require("./../models/place.model");
router.get("/getAllPlaces", (req, res) => {
  Places
    .find()
    .select("name city image cost")
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error fetching places", err })
    );
});
router.get("/getAllPlaces/:city", (req, res) => {
  let city = req.params.city;
  Places
    .find({ city: city })
    .select("name city image cost")
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error fetching places", err })
    );
});
router.get("/getOnePlace/:place_id", (req, res) => {
  Places
    .findById(req.params.place_id)
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error fetching place", err })
    );
});

router.post("/newPlace", (req, res) => {
  const place = req.body

  Places
    .create(place)
    .then((response) => res.json(response))
    .catch((err) =>
      res.status(500).json({ code: 500, message: "Error saving place", err })
    );
});

router.put("/editPlace/:place_id", (req, res) => {
  const place = req.body

  Places
    .findByIdAndUpdate(req.params.place_id, place, { new: true })
    .then((response) => res.json(response))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error editing this place", err })
    );
});

router.delete("/deletePlace/:place_id", (req, res) => {
  Places
    .findByIdAndDelete(req.params.place_id)
    .then(() => res.json({ code: 202, message: "Place deleted successfully" }))
    .catch((err) =>
      res
        .status(500)
        .json({ code: 500, message: "Error deleting this place", err })
    );
});
module.exports = router;
