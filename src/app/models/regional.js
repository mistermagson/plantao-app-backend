import Sequelize, {Model} from "sequelize";

  class Regional extends Model {
      static init(sequelize){
        Regional.init({
          codigo: DataTypes.INTEGER,
          descricao: DataTypes.STRING,
          uf: DataTypes.STRING
        }, {
          sequelize,
          modelName: 'Regional',
          tableName: 'regionais'
        });
    }
    static associate(models) {
      // define association here
    }
  }

export default Regional;
