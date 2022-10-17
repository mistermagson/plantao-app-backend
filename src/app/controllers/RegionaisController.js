import Sequelize, {Model} from "sequelize";
import Regional from "../models/regional";
import Juiz from "../models/juiz";


class RegionaisController {

  async index(req, res) {
    try{
      const data = await Regional.findAll({
        limit:  100,
      });
      return res.json(data);
    }
    catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async show(req, res) {
   try{
     const { id } = req.params;
     const regional = await Regional.findByPk(id);
     const status = regional ? 200 : 404;

     return res.status(status).json(regional);
   }
    catch (error){
      return res.status(500).json(error.message);
    }

  }

  async create(req, res) {
    const { nome, dataAntiguidade, email , status} = req.body;

    try{
      const regional = await Regional.create({ nome, dataAntiguidade, email , status});
     // await regional.save();
      return res.status(201).json(regional);
    }
    catch(error){
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {

    const { id, nome, dataAntiguidade, email , status} = req.body;

    try{
      const regional = await Regional.findByPk(id);
      await regional.update({nome, dataAntiguidade, email , status});
      res.json(regional);
    }
    catch(error){
      return res.status(500).json(error.message);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try{
      const regional = await Regional.findByPk(id);
      await regional.destroy();
      res.status(204).json();
    }
    catch(error){
      return res.status(500).json(error.message);
    }

  }

  async addJuizes(req, res) {
    const { regionalId, juizId} = req.body;
    //const RegionalJuiz = sequelize.define('RegionalJuiz', {}, { timestamps: false });

    try{
      const regional = await Regional.findByPk(regionalId);
      const juiz = await Juiz.findByPk(juizId);

      //await regional.addJuiz(juiz, {through: 'RegionalJuiz'})

      console.log(juiz, regional)
      return res.status(201);
    }
    catch(error){
      return res.status(500).json(error.message);
    }
  }


}

export default new RegionaisController();
