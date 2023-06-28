import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';


function SignIn() {
  const navigation = useNavigation();
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: ''
  })

  const [userSignedIn, setUserSignedIn] = useState(AsyncStorage.getItem('user'))
  const [accessToken, setAccessToken] = useState(AsyncStorage.getItem('access_token'))

  const navigateToProgram = () => {
    navigation.navigate('Program');
  };

  const handleChange = (text, inputName) => {
    setFormInfo({ ...formInfo, [inputName]: text });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/login/', 
      {
          method: 'POST',
          headers: {
              'Content-Type':'application/json',
          },
          body: JSON.stringify(formInfo)
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
          console.log('access_token', data.access)
          console.log('user', formInfo.username)

          setUserSignedIn(formInfo.username)
          setAccessToken(data.access)
          
          AsyncStorage.setItem('access_token', data.access)
          AsyncStorage.setItem('user', formInfo.username)
          navigateToProgram()
          }
      })
    }
  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => handleChange(text, 'username')}
        value={formInfo.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => handleChange(text, 'password')}
        value={formInfo.password}
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={handleSubmit} />
    </View>
  )
}

export default SignIn