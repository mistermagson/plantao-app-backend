import { Router } from "express";
import juizes from "./app/controllers/JuizesController";

const routes = new Router();

routes.get("/juizes", juizes.index);
routes.get("/juizes/:id", juizes.show);
routes.post("/juizes", juizes.create);
routes.put("/juizes", juizes.update);
routes.delete("/juizes/:id", juizes.destroy);

export default routes;
