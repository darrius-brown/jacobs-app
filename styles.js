import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
      },
      formContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
      },
      chart: {
        backgroundColor: 'black',
        borderRadius: 8,
        padding: 16,
        elevation: 2,
      },
      header: {
        flexDirection: 'row',
        marginBottom: 8,
        textAlign: 'center',
      },
      headerText: {
        flex: 1,
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      workoutText: {
        flex: 1,
        fontSize: 14,
        color: 'white',
      },
      repsText: {
        flex: 1,
        fontSize: 14,
        textAlign: 'right',
        color: 'white',
        marginBottom: 10,
      },
      pageContainer: {
        flex: 1,
      },
      page: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        paddingVertical: 40,
        borderWidth: 1,
        borderColor: 'white',
      },
      column: {
        flexDirection: 'column',
        marginBottom: 100,
      },
      alignRight: {
        textAlign: 'right',
      },
  });