import React from 'react';
import { View, Button, Text, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

function Home() {
  const navigation = useNavigation();

  const navigateToSignIn = () => {
    navigation.navigate('Sign In Page');
  };

  const navigateToSignUp = () => {
    navigation.navigate('Sign Up Page');
  };

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