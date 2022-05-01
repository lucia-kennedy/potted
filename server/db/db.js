const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function getAllPlants(db = connection) {
    return db('plants').select()
  }




module.exports = {
    getAllPlants,
}
