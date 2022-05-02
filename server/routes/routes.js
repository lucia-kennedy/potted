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


  router.get('/fact', (req, res) => {
    db.getPlantFact()
      .then((facts) => {
        res.json(facts)
      })
      .catch((err) => {
        res.status(500).send(err.message)
      })
  })

  router.get('/add', (req, res) => {
    res.render('add')
  })
  
  router.post('/add', (req, res) => {
    db.addPlant(req.body)
      .then(() => {
        res.redirect('/')
      })
      .catch((err) => {
        res.status(500).send('oops - ' + err.message)
      })
  })
  



  module.exports = router
