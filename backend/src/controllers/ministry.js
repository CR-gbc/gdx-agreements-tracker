const useController = require("./useController/index.js");
const model = require("../models/ministry");
const what = { single: "ministry", plural: "ministries" };
const controller = useController(model, what, "admin_form");

module.exports = controller;
