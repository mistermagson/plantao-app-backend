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

  create(req, res) {
    const { nome, dataAntiguidade } = req.body;
    const id = juizes.length + 1;
    const juiz = { id, nome, dataAntiguidade };

    juizes.push(juiz);

    return res.status(201).json(juiz);
  }

  update(req, res) {
    const { id } = req.params;
    const { nome, dataAntiguidade } = req.body;

    const index = juizes.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      juizes[index] = { id, nome, dataAntiguidade };
    }

    res.status(status).json(juizes[index]);
  }

  destroy(req, res) {
    const { id } = req.params;

    const index = juizes.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      juizes.splice(index, 1);
    }

    res.status(status).json();
  }
}

export default new JuizesController();
