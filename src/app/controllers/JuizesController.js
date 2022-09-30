import Juiz from "../models/juiz";

class JuizesController {

  async index(req, res) {
    try{
      const data = await Juiz.findAll({
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

     //const juiz = juizes.find((item) => item.id === id);
     const juiz = await Juiz.findByPk(id);
     const status = juiz ? 200 : 404;

     return res.status(status).json(juiz);
   }
    catch (error){
      return res.status(500).json(error.message);
    }

  }

  async create(req, res) {
    const { nome, dataAntiguidade, email , status} = req.body;

    try{
      const juiz = await Juiz.create({ nome, dataAntiguidade, email , status});
     // await juiz.save();
      return res.status(201).json(juiz);
    }
    catch(error){
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {

    const { id, nome, dataAntiguidade, email , status} = req.body;

    try{
      const juiz = await Juiz.findByPk(id);
      await juiz.update({nome, dataAntiguidade, email , status});
      res.json(juiz);
    }
    catch(error){
      return res.status(500).json(error.message);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    try{
      const juiz = await Juiz.findByPk(id);
      await juiz.destroy();
      res.status(204).json();
    }
    catch(error){
      return res.status(500).json(error.message);
    }

  }
}

export default new JuizesController();
