const { predio } = require('../models');

class PredioControladores {
  async index(req, res) {
    try {
      const predios = await predio.findAll();

      return res.json(predios);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async show(req, res) {
    try {
      const retorno = await predio.findByPk(req.params.id);
      return res.json(retorno);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async store(req, res) {
    try {
      const retorno = await predio.create(req.body);

      return res.json(retorno);
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const retorno = await predio.findByPk(req.params.id);

      await retorno.update(req.body);

      return res.json({ retorno });
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }

  async destroy(req, res) {
    try {
      const retorno = await predio.findByPk(req.params.id);

      await retorno.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new PredioControladores();
