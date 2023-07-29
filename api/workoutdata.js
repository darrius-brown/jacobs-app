import axios from "axios";

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
      console.error(error);  
  });
}

export function getProgram(username) {
  const URL = `http://localhost:8000/program/${username}/`;
  return axios.get(URL)
  .then(res => {
    return res.data
  })
  .catch((error) => {
    console.error(error);  
});
}

export function getProgramDetail(username, pk) {
  const URL = `http://localhost:8000/program/${username}/${pk}`;
  return axios.get(URL)
  .then(res => {
    return res.data
  })
  .catch((error) => {
    console.error(error);  
});
}

export function putProgramDetail(username, pk, content) {
  const URL = `http://localhost:8000/program/${username}/${pk}`;
  const {  user_id, exercise_ids } = content

  return axios.put(URL, {
    user: {id: user_id,
    exercise: exercise_ids}
  })
  .then(res => {
    return res.data
  })
  .catch((error) => {
    console.error(error);  
});
}

