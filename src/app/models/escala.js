import {Sequelize, Model} from "sequelize";

class Escala extends Model {
    static init(sequelize) {
        super.init({
                dataInicial: Sequelize.DATE,
                dataFinal: Sequelize.DATE,
                tipo: Sequelize.STRING,
                status: Sequelize.ENUM
            },
            {
                sequelize,
            });
    }

    static associate(models) {

    }
}

export default Escala;
