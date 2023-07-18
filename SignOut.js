import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const SignOut = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const handleSignOut = async () => {
    try {
      await AsyncStorage.clear();
      setIsAuthenticated(false);
      navigateToHome()
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText} onPress={handleSignOut}>Sign Out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      position: 'absolute',
      top: 10,
      right: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default SignOut;