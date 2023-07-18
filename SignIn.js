import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { postSignIn } from './api/forms';


function SignIn() {
  const navigation = useNavigation();
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: ''
  });
  const [userSignedIn, setUserSignedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const navigateToProgram = () => {
    navigation.navigate('Program');
  };

  const handleChange = (text, inputName) => {
    setFormInfo({ ...formInfo, [inputName]: text });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    postSignIn({
      username: formInfo.username,
      password: formInfo.password
    }) .then(() => {
    navigateToProgram()
    })
      
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleChange(text, 'username')}
        value={formInfo.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleChange(text, 'password')}
        value={formInfo.password}
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={handleSubmit} />
    </View>
    )
  }

export default SignIn