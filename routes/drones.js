const express = require("express");
const router = express.Router();

const DroneModel = require("../models/Drone.model");

router.get("/drones", (req, res, next) => {
  DroneModel.find()
    .then((drones) => {
      res.render("drones/list", { drones });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create", (req, res, next) => {
  let { name, propellers, maxSpeed } = req.body;
  DroneModel.create({ name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(err);
      res.redirect("back");
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((data) => {
      res.render("drones/update-form", { data });
    })
    .catch((err) => {
      console.log("No drone by this id");
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  let { name, propellers, maxSpeed } = req.body;
  DroneModel.findByIdAndUpdate(req.params.id, { name, propellers, maxSpeed })
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(`couldn't update`);
      res.redirect("back");
    });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      console.log(`couldn't delete`);
      res.redirect("back");
    });
});

module.exports = router;
