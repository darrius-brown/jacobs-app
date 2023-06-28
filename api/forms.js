import axios from "axios";

export function postSignUp(content) {
    const URL = `http://localhost:8000/signup/`
    const {username, password, first_name, last_name, email} = content 
      return axios.post(URL, {
        username: username,
        password: password,
        first_name: first_name,
        last_name: last_name,
        email: email,
      })
      .then(res => {
        return res.data
      })  
      .catch((error) => {
        if (error.response.status === 400) {
        console.error(error);
        }
      });  
  }

  export function postSignIn() {
  fetch(loginEndpoint, 
    {
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },
        body: JSON.stringify(formState)
    }
)
.then(res => {
    if (res.ok) {
        return res.json()
    } else {
        return Promise.resolve(null)
    }
})
.then(data => {
    if (!data) {
        setNetworkErrMsg('The username or password you entered in incorrect.')
        setClientErrMsg('The username or password you entered in incorrect.')
        console.log(`problem with network request: ${networkErrMsg}`)
        console.log('data = ' + data)
    } else {

        console.log('data' + data)

        setUserSignedIn(formState.username)
        setAccessToken(data.access)

        localStorage.setItem('access_token', data.access)
        localStorage.setItem('user', formState.username)
        navigate(`/${formState.username}`)
        }
    })
}