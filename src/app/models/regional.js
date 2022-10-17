import Sequelize, {Model} from "sequelize";
import Juiz from "./juiz";

class Regional extends Model {
    static init(sequelize) {
        super.init({
            codigo: Sequelize.INTEGER,
            descricao: Sequelize.STRING,
            uf: Sequelize.STRING
        }, {
            sequelize,
            modelName: 'Regional',
            tableName: 'regionais'
        });

    }
    static associate(models) {
        this.belongsToMany(models.Juiz, {through: 'RegionalJuiz' })
    }

}

export default Regional;
