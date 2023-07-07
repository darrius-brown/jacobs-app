import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { getProgram } from './api/workoutdata'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Program() {
  const [database, setDatabase] = useState([])
  const [userSignedIn, setUserSignedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const getDatabase = () => {
    getProgram(userSignedIn)
      .then((data) => {
        setDatabase(data)
      })
  }

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
      getDatabase();
    }
  }, [userSignedIn]);

  const divs = database.map((item) => {
    return (
      <View style={styles.card}>
        <Text key={item.id} style={styles.dayText}>Day {item.day}</Text>
        <Text key={item.id} style={styles.workoutText}>{item.exercise}</Text>
        </View>
    )
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{userSignedIn}'s Program</Text>
      {divs}
    </View>
  )
}

export default Program