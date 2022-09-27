import Sequelize, {Model} from "sequelize";

class Juiz extends Model {
    static init(sequelize){
        super.init(
            {
                nome: Sequelize.STRING,
                dataAntiguidade: Sequelize.DATEONLY,
                email: Sequelize.STRING
            },
        {
            sequelize,
        });
    }

    static associate(models) {
        this.belongsTo(models.Regional,{foreignKey: "regional_id"});

    }
}
export default Juiz;