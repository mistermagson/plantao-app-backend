import { Router } from "express";
import juizes from "./app/controllers/JuizesController";
import regionais from "./app/controllers/RegionaisController";

const routes = new Router();

routes.get("/juizes", juizes.index);
routes.get("/juizes/:id", juizes.show);
routes.post("/juizes", juizes.create);
routes.put("/juizes", juizes.update);
routes.delete("/juizes/:id", juizes.destroy);

routes.get("/regionais", regionais.index);
routes.get("/regionais/:id", regionais.show);
routes.post("/regionais", regionais.create);
routes.put("/regionais", regionais.update);
routes.delete("/regionais/:id", regionais.destroy);


export default routes;
