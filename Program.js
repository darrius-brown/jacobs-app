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
        console.log(data)
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
      <View style={styles.row}>
        <Text key={item.id} style={styles.repsText}>Day {item.day}</Text>
        <Text key={item.id} style={styles.workoutText}>{item.exercise}</Text>
      </View>
    )
  })

  return (
    <View style={styles.chart}>
      <Text style={styles.title}>{userSignedIn}'s Program</Text>
      <View style={styles.header}>
      </View>
      <View style={styles.pageContainer}>
        {database.map((item, index) => {
          let exerciseText = [];
          for (let i = 0; i < item.exercise.length; i++) {
            exerciseText.push(
              <View key={i} style={styles.row}>
                <Text style={styles.workoutText}>{item.exercise[i]}</Text>
                <Text style={styles.repsText}>3 x 10</Text>
              </View>
            );
          }
          return (
            <View key={index} style={styles.page}>
            <Text style={styles.title}>Day {item.day} </Text>
            <View style={styles.row}>
              <Text style={styles.headerText}>Workout</Text>
              <Text style={[styles.headerText, styles.alignRight]}>Reps</Text>
            </View>
              <View style={styles.column}>
                {exerciseText}
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

export default Program