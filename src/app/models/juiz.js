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
        //this.belongsToMany('Regional', {through: 'Regional_Juiz' })
    }
    static associate(models) {
        this.belongsToMany(models.Regional, {through: 'RegionalJuiz' })
    }
}

export default Juiz;
