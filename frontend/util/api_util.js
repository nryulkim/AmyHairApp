import axios from 'axios';

export function getAllCollections(success, errors){
  axios({
    method: 'get',
    url: 'https://amyhair-app.herokuapp.com/api/collections'
  })
  .then((response) => success(response.data))
  .catch((err)=>console.log(err));
};

function success(x){
  console.log(x);
}

export function downloadImages(authKey, authSecret){
  debugger
}
