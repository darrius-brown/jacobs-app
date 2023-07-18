import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, TextInput, Button, TouchableOpacity, Modal, Text } from 'react-native';
import { postSignUp } from './api/forms';
import { createProgram } from './api/workoutdata';
import { styles } from './styles';
import { postSignIn } from './api/forms';

function SignUp() {
  const [selectedItem, setSelectedItem] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [program, setProgram] = useState(3)
  const [selectedItemLength, setSelectedItemLength] = useState('');
  const [dropdownVisibleLength, setDropdownVisibleLength] = useState(false);
  const [textInputValueLength, setTextInputValueLength] = useState('');
  const [selectedItemTime, setSelectedItemTime] = useState('');
  const [dropdownVisibleTime, setDropdownVisibleTime] = useState(false);
  const [textInputValueTime, setTextInputValueTime] = useState('');
  const program_length = ['1 day', '2 days', '3 days', '4 days'];
  const program_time = ['Less than an hour', 'More than an hour']

  const toggleDropdownLength = () => {
    setDropdownVisibleLength(!dropdownVisibleLength);
  };

  const toggleDropdownTime = () => {
    setDropdownVisibleTime(!dropdownVisibleTime);
  };

  const selectItemLength = (item) => {
    setFormInfo({ ...formInfo, program_length: item });
    setSelectedItemLength(item);
    setDropdownVisibleLength(false);
  };

  const selectItemTime = (item) => {
    setFormInfo({ ...formInfo, program_time: item })
    setSelectedItemTime(item);
    setDropdownVisibleTime(false);
  };

  const navigation = useNavigation();
  const [formInfo, setFormInfo] = useState({
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    email: '',
    password_check: '',
    program_length: '',
    program_time: ''
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
      program_length: formInfo.program_length,
      program_time: formInfo.program_time,
    }).then((responseData) => {
      let updatedProgram;
  
      if (formInfo.program_length === '1 day' && formInfo.program_time === 'Less than an hour') {
        updatedProgram = 1;
      } else if (formInfo.program_length === '1 day' && formInfo.program_time === 'More than an hour') {
        updatedProgram = 2;
      } else if (formInfo.program_length === '2 days' && formInfo.program_time === 'Less than an hour') {
        updatedProgram = 3;
      } else if (formInfo.program_length === '2 days' && formInfo.program_time === 'More than an hour') {
        updatedProgram = 4;
      } else if (formInfo.program_length === '3 days' && formInfo.program_time === 'Less than an hour') {
        updatedProgram = 5;
      } else if (formInfo.program_length === '3 days' && formInfo.program_time === 'More than an hour') {
        updatedProgram = 6;
      } else if (formInfo.program_length === '4 days' && formInfo.program_time === 'Less than an hour') {
        updatedProgram = 7;
      } else if (formInfo.program_length === '4 days' && formInfo.program_time === 'More than an hour') {
        updatedProgram = 8;
      }
  
      setProgram(updatedProgram);
      postSignIn({
        username: formInfo.username,
        password: formInfo.password
      })
  
      createProgram(
        {
          user_id: responseData.id,
          email: formInfo.email,
        },
        responseData.id,
        updatedProgram
      );

      navigateToHome();
    });
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
      <TouchableOpacity style={styles.inputContainer} onPress={toggleDropdownLength}>
        <Text style={styles.inputText}>{selectedItemLength || 'How many days a week do you plan to work out?'}</Text>
      </TouchableOpacity>
      {dropdownVisibleLength && (
        <View style={styles.dropdownContainer}>
          {program_length.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => selectItemLength(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TextInput
            style={styles.textInput}
            value={selectedItemLength}
            onChangeText={(text) => {
            handleChange(text, 'program_length');
            setTextInputValueLength(text);
  }}
          />
        </View>
      )}

      <TouchableOpacity style={styles.inputContainer} onPress={toggleDropdownTime}>
        <Text style={styles.inputText}>{selectedItemTime || 'How much time do you have for each day?'}</Text>
      </TouchableOpacity>
      {dropdownVisibleTime && (
        <View style={styles.dropdownContainer}>
          {program_time.map((item) => (
            <TouchableOpacity
              key={item}
              style={styles.dropdownItem}
              onPress={() => selectItemTime(item)}
            >
              <Text style={styles.dropdownItemText}>{item}</Text>
            </TouchableOpacity>
          ))}
          <TextInput
            style={styles.textInput}
            value={selectedItemTime}
            onChangeText={(text) => {
            handleChange(text, 'program_time');
            setTextInputValueTime(text);
  }}
          />
        </View>
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default SignUp;