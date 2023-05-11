import axios from './axios'

// export function getPosts() {
//     return axios.get('http://localhost:8000')
//       // .then(response => response.data)
//       // .catch(error => console.log(error))
//   }
export function getPosts() {
  return fetch('http://localhost:8000',{method:'GET'}) //{mode: 'no-cors',method: "get"}
      .then(res => res.json())
      .then(data => data)
      .catch(err => { console.log(err) })
}
  

  
  export function addPost(newPost) {
    return axios.post('http://localhost:8000', newPost)
      .then(response => response.data)
      .catch(error => console.log(error))
  }
