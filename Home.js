import React, { useState, useEffect } from 'react';
import { View, Button, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
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
      <ImageBackground source={require('./Images/homebackground.png')} style={styles.backgroundImage} opacity={0.9}>
        <Text style={styles.title}>Welcome To Jacob's Fitness Plan!</Text>
        <Button title="Sign in" onPress={navigateToSignIn} />
        <Button title="Don't have an account? " onPress={navigateToSignUp} />
      </ImageBackground>
    </View>
  );
};

export default Home;