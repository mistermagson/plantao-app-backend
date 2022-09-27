import Sequelize, {Model} from "sequelize";

class Plantonista extends Model {
    static init(sequelize) {
        super.init({
                data: Sequelize.DATEONLY
            },
            {
                sequelize,
            });
    }

    static associate(models) {
        this.belongsTo(models.Escala, {foreignKey: "escala_id"})
    }
}

export default Plantonista;
