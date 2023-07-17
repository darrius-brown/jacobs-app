import axios from "axios";

// export function getExercise(id, accessToken) {
//     const URL = `http://localhost:8000/exercise/`
//     const headers = { 
//       'Authorization': `Bearer${accessToken}`,
//   }
//     return axios.get(URL, {headers}, )
//     .then(res => {
//       return res.data
//     })
//   }

  export function getProgram(username) {
    const URL = `http://localhost:8000/program/${username}/`
    console.log(username)
    return axios.get(URL)
    .then(res => {
      return res.data
    })
  }

  export function createProgram(content, userId, program) {
    const URL = `http://localhost:8000/create/program/${userId}/${program}/`
    const {  user_id, email } = content;
    
    return axios.post(URL, {
      user: {id: user_id,
      email: email}
    })
    .then(res => {
      return res.data;
    })  
    .catch((error) => {
      if (error.response && error.response.status === 400) {
        console.error(error);
      }
    });
  }