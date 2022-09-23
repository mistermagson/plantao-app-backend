const {Router}  = require("express");
const routes = new Router();

const juizes = require("./app/controllers/JuizesController");

routes.get("/juizes", juizes.index);
routes.get("/juizes/:id", juizes.show);
routes.post("/juizes", juizes.create);
routes.put("/juizes/:id", juizes.update);
routes.get("/juizes/:id", juizes.destroy);

module.exports = routes;