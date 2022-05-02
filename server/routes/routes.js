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


  // router.get('/fact', (req, res) => {
  //   db.getPlantFact()
  //     .then((facts) => {
  //       res.json(facts)
  //     })
  //     .catch((err) => {
  //       res.status(500).send(err.message)
  //     })
  // })
  



  module.exports = router
