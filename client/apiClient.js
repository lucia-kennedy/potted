import request from 'superagent'


export function getPlants() {
  return request
  .get('api/v1/plants')
    .then((res) => res.body)
}

export function getAllFacts() {
  return request 
  .get('api/v1/plants/fact')
  .then(res => {
    console.log(res.body)
    return res.body
  })
}