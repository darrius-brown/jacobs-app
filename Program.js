import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { getProgram } from './api/workoutdata'

function Program() {
    const [database, setDatabase] = useState([])

    const getDatabase = () => {
        getProgram()
          .then((data) => {
            setDatabase(data)
          })
      }
    
      useEffect(() => {
        getDatabase()
      }, [])

      const divs = database.map((item) => {
        return ( 
        <>
          <Text style={styles.text}>{item.exercise}</Text>
          <Text style={styles.text}>{item.day}</Text>
        </>
        )
      })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Program</Text>
            {divs}
        </View>
    )
}

export default Program