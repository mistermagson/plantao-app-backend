import Sequelize from "sequelize";

import config from "../config/database";

import Juiz from "../app/models/juiz";
import Regional from "../app/models/regional";

const models = [Juiz, Regional];

class Database {
    constructor(){
        this.init();
    }
    init(){
        this.connection = new Sequelize(config);
        models.forEach(model => model.init(this.connection));
    }
}

export default new Database();