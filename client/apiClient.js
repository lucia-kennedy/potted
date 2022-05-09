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

export function postAPlant(anotherPlant) {
  return request
  .post('api/v1/plants')
  .send(anotherPlant)
  .then(res => res.body)

}

export function delPlant (id) {
  return request
    .delete('/api/v1/plants/' + id)
    .then(() => null)
}