import { API_ROOT } from '../config/constants';

let handleResponse = response => {
  if(response.status === 200) {
      return response.json();
  }
  return {};
}

let handleCommonError = err => {
  console.log('Common Fetch Error', err);
};

let xhr =(url) => {
    return fetch(url,{
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then(handleResponse)
    .catch(handleCommonError)
};
  
const FetchIntercept = (url) => {
  return xhr(url);
}

export default FetchIntercept;