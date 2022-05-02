const connection = require('./connection')

function getAllPlants(db = connection) {
    return db('plants').select()
  }

//   function getPlantFact (db=connection){
//     return db('facts').select()
// }



module.exports = {
    getAllPlants,
//     getPlantFact
// 
}
