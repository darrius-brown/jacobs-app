import React, { useState, useEffect } from 'react'
import { useRoute, View, Text } from '@react-navigation/native';
import { getProgramDetail } from './api/workoutdata';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles'


const Edit = () => {
  const [database, setDatabase] = useState([])
  const [userSignedIn, setUserSignedIn] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const route = useRoute();
  const { pk } = route.params;

  const getDatabase = () => {
    getProgramDetail(userSignedIn, pk)
      .then((data) => {
        setDatabase(data);
        console.log(pk)
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

  let exerciseText = [];
  if (Array.isArray(database.exercise)) {
    for (let i = 0; i < database.exercise.length; i++) {
      exerciseText.push(
        <View key={i} style={styles.row}>
          <Text style={styles.workoutText}>{database.exercise[i]}</Text> {/* Fix: Changed 'item' to 'database' */}
          <Text style={styles.repsText}>2 x 12</Text>
        </View>
      );
    }
  } else {
    console.log('database.exercise is not an array or is undefined');
  }

  return (
    
      <View style={styles.column}>
        {exerciseText}
      </View>
    

  )
}

export default Edit