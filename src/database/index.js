import Sequelize from "sequelize";

import config from "../config/database";

import Juiz from "../app/models/juiz";

const models = [Juiz];

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