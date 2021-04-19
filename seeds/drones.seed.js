const mongoose = require("mongoose");
require("../db");
const DroneModel = require("../models/Drone.model");

// Iteration #1
let initials = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

DroneModel.create(initials)
  .then((result) => {
    console.log(result);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
