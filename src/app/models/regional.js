import Sequelize, { Model} from "sequelize";

class Regional extends Model {
    static init(sequelize){
        super.init(
            {
                codigo: Sequelize.INTEGER,
                descricao: Sequelize.STRING,
                uf: Sequelize.STRING
            },
        {
            sequelize,
        }
    )
    }
    static associate(models) {
        this.hasMany(models.Juiz);
        this.hasMany(models.Subsecao);
    }


}
export default Regional;