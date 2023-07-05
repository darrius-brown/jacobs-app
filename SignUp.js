import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { postSignUp } from './api/forms';
import { styles } from './styles';
function SignUp() {
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    password_check: ''
  });

  const handleChange = (text, inputName) => {
    setFormInfo({ ...formInfo, [inputName]: text });
  };

  const handleSubmit = () => {
    postSignUp({
      username: formInfo.username,
      password: formInfo.password,
      first_name: formInfo.first_name,
      last_name: formInfo.last_name,
      email: formInfo.email,
      })
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        onChangeText={(text) => handleChange(text, 'first_name')}
        value={formInfo.first_name}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        onChangeText={(text) => handleChange(text, 'last_name')}
        value={formInfo.last_name}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => handleChange(text, 'username')}
        value={formInfo.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => handleChange(text, 'email')}
        value={formInfo.email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => handleChange(text, 'password')}
        value={formInfo.password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Re enter Password"
        onChangeText={(text) => handleChange(text, 'password_check')}
        value={formInfo.password_check}
        secureTextEntry={true}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default SignUp;