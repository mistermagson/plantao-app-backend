import Sequelize, {Model} from "sequelize";

class Subsecao extends Model {
    static init(sequelize){
        super.init(
            {
                subsecao: Sequelize.INTEGER,
                descricao: Sequelize.STRING,
                uf: Sequelize.STRING

            },
            {
                sequelize,
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Regional,{foreignKey: "regional_id"})
    }
}
export default Subsecao;