const express = require('express')
const db = require('../db/db')
const router = express.Router()

router.get('/', (req, res) => {
    db.getAllPlants()
      .then((plants) => {
        res.json(plants)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })

  module.exports = router
