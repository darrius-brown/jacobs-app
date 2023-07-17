import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, TouchableOpacity, Modal, Text } from 'react-native';
import { postSignUp } from './api/forms';
import { createProgram } from './api/workoutdata';
import { styles } from './styles';
function SignUp() {
  const [selectedItem, setSelectedItem] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [program, setProgram] = useState(3)
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const selectItem = (item) => {
    setSelectedItem(item);
    setDropdownVisible(false);
  };

  const navigation = useNavigation();
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    password_check: ''
  });

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

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

      .then(responseData => {
        console.log(responseData);
        createProgram({
          user_id: responseData.id,
          email: formInfo.email
        },
        responseData.id,
        program) 
      })

    navigateToHome()
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
      {/* <TouchableOpacity style={styles.inputContainer} onPress={toggleDropdown}>
        <Text style={styles.inputText}>{selectedItem || 'Select an item'}</Text>
      </TouchableOpacity>
      <Modal
        visible={dropdownVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setDropdownVisible(false)}
      >
        <View style={styles.modalContainer}>
          {items.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => selectItem(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))} */}
        {/* </View>
      </Modal> */}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default SignUp;