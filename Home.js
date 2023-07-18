import React, { useState, useEffect } from 'react';
import { View, Button, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home(props) {
  const [userSignedIn, setUserSignedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate('Sign In Page');
  };

  const navigateToSignUp = () => {
    navigation.navigate('Sign Up Page');
  };

  const navigateToProgram = () => {
    navigation.navigate('Program');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        const token = await AsyncStorage.getItem('access_token');
        setUserSignedIn(user);
        setAccessToken(token);
        console.log('user signed in: ' + user + token);
      } catch (error) {
        console.log('Error retrieving data from AsyncStorage:', error);
      }
    };

    fetchUserData();
  }, [])

  useEffect(() => {
    if (userSignedIn) {
      navigateToProgram();
    }
  }, [userSignedIn]);

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome To Jacob's Fitness Plan!</Text>
        <Button title="Sign in" onPress={navigateToSignIn} />
        <Button title="Don't have an account? " onPress={navigateToSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BDD5EA'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 20,
    marginTop: '50%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Home;