import request from 'superagent'

const plantURL = 'api/v1/plants'

export function getPlants() {
  return request
  .get(plantURL)
    .then((resp) => {
    return resp.body
    })
}