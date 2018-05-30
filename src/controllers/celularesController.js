const Celular = require('../models/celular')

module.exports = {
  create: (req, res, next) => {
    let celular = new Celular(req.body)

    celular.save()
      .then(saved => res.json(saved))
      .catch(e => next(e))
    
  },

  find: (req, res, next) => {
    Celular.findById(req.params.id)
      .then(user => res.json(user))
      .catch(e => next(e))
  },

  findAll: (req, res) => {
    Celular.find()
      .then(users => res.json(users))
      .catch(e => next(e))
  },

  update: (req, res, next) => {
    Celular.findById(req.params.id)
      .then( found => {
        found.set(req.body)
        found.save()
          .then(saved => res.json(saved))
          .catch(e => next(e))
      })
      .catch(e => next(e))
  },

  delete: (req, res) => {
    Celular.findByIdAndRemove(req.params.id)
      .then(deleted => {
        res.json({
          message: 'Celular deleted',
          id: deleted._id
        })
      })
      .catch(e => next(e))
  }
}