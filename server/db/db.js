const connection = require('./connection')

function getAllPlants(db = connection) {
    return db('plants').select()
  }

  function getPlantFact (db=connection){
    return db('facts').select()
}

function addPlant (plant, db=connection){
  return db('plants')
  .insert(plant, 'id')
}


function delPlant (id, db = connection) {
  return db('plants')
    .where('id', id)
    .del()
}

module.exports = {
    getAllPlants,
    getPlantFact,
    addPlant,
    delPlant

}
