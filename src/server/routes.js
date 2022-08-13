"use strict";

const express = require("express");
const router = express.Router();

const otherController = require("./controllers/other");
const homeController = require("./controllers/home");
const newsletterController = require("./controllers/newsletter");
const staticController = require("./controllers/static");

router.get(`/build/build.json`, otherController.index);

router.get(`/index`, homeController.index);
router.post(`/newsletter/subscribe`, newsletterController.subscribe);

// Static Pages
router.get(`/unsupportedbrowser`, staticController.static);

module.exports = router;
