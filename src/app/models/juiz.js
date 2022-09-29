import Sequelize, {Model} from "sequelize";

class Juiz extends Model {
    static init(sequelize) {
        super.init({
                nome: Sequelize.STRING,
                dataAntiguidade: Sequelize.DATEONLY,
                email: Sequelize.STRING,
                status: Sequelize.ENUM('ATIVO', 'INATIVO')

            },
            {
                sequelize,
                modelName: 'Juiz',
                tableName: 'juizes'
            });
    }

    static associate(models) {
        // define association here
    }
}

export default Juiz;
