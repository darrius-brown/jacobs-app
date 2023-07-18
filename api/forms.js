import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function postSignUp(content) {
    const URL = `http://localhost:8000/signup/`;
    const { username, password, first_name, last_name, email } = content;
    
    return axios.post(URL, {
      username: username,
      password: password,
      first_name: first_name,
      last_name: last_name,
      email: email,
    })
    .then(res => {
      return res.data;
    })  
    .catch((error) => {
      console.log(error);
    });
  }

export function postSignIn(content) {
  const URL = `http://localhost:8000/login/`;
  const { username, password } = content;

  return axios
    .post(URL, {
      username: username,
      password: password,
    })
    .then(async (response) => {
      if (response.status === 200) {
        const data = response.data;
        const authToken = data.access;
        const user = data.username;
        await AsyncStorage.setItem('authToken', authToken);
        await AsyncStorage.setItem('user', user);
      } else {
        console.log('Login failed');
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
  

  
  