const connection = require('./connection')

function getAllPlants(db = connection) {
    return db('plants').select()
  }

  function getPlantFact (db=connection){
    return db('facts').select()
}

function addPlant (name,price, db=connection){
  return db('plants').insert({
    name:name,
    price:price,
  })
}

module.exports = {
    getAllPlants,
    getPlantFact,
    addPlant

}
