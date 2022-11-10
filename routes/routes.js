const routes = require("express").Router();
const TaskController = require("../controler/TaskController");

routes.get("/", TaskController.getAllTasks);
routes.post("/create", TaskController.createTask)

module.exports = routes;
