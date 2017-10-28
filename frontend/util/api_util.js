import axios from 'axios'
export function getAllCollections(success, errors){
  axios({
    method: 'get',
    url: 'api/collections'
  })
  .then((response) => console.log(response))
  .catch((err)=>console.log(err));
}
