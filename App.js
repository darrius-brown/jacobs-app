import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Program from './Program';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

const initializeAsyncStorage = async () => {
  try {
    await AsyncStorage.setItem('initialized', 'true');
    console.log('AsyncStorage initialized successfully.');
  } catch (error) {
    console.log('Error initializing AsyncStorage:', error);
  }
};

initializeAsyncStorage();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Stack.Screen name="Sign In Page" component={SignIn} options={{ title: 'Sign In' }} />
        <Stack.Screen name='Sign Up Page' component={SignUp} options={{title: 'Sign Up'}}/>
        <Stack.Screen name='Program' component={Program} options={{title: 'Program'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

