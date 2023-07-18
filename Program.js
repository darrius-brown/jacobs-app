import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { getProgram } from './api/workoutdata'
import AsyncStorage from '@react-native-async-storage/async-storage'
import SignOut from './SignOut'

function Program() {
  const [database, setDatabase] = useState([])
  const [userSignedIn, setUserSignedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  const getDatabase = () => {
    getProgram(userSignedIn)
      .then((data) => {
        setDatabase(data);
      })
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        const token = await AsyncStorage.getItem('authToken');
        setUserSignedIn(user);
        setAccessToken(token);
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

  return (
    <View style={styles.chart}>
      <Text style={styles.title}>{userSignedIn}'s Program</Text>
      <SignOut/>
      <View style={styles.header}>
      </View>
      <View style={styles.pageContainer}>
        {database.map((item, index) => {
          let exerciseText = [];
          for (let i = 0; i < item.exercise.length; i++) {
            exerciseText.push(
              <View key={i} style={styles.row}>
                <Text style={styles.workoutText}>{item.exercise[i]}</Text>
                <Text style={styles.repsText}>2 x 12</Text>
              </View>
            );
          }
          return (
            <View key={index} style={styles.page}>
            <Text style={styles.title}>Day {index + 1} </Text>
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