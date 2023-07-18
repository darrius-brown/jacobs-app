import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      backgroundColor: '#BDD5EA',
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
        color: 'black',
        textAlign: 'center'
      },
      formContainer: {
        backgroundColor: '#BDD5EA',
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
      },
      input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        color: 'black',
      },
      chart: {
        backgroundColor: '#BDD5EA',
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
        color: 'black',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
      },
      workoutText: {
        flex: 1,
        fontSize: 14,
        color: 'black',
      },
      repsText: {
        flex: 1,
        fontSize: 14,
        textAlign: 'right',
        color: 'black',
        marginBottom: 10,
      },
      pageContainer: {
        flex: 1,
      },
      page: {
        flex: 1,
        backgroundColor: '#BDD5EA',
        paddingHorizontal: 10,
        paddingVertical: 40,
        borderWidth: 1,
        borderColor: 'black',
      },
      column: {
        flexDirection: 'column',
        marginBottom: 100,
      },
      alignRight: {
        textAlign: 'right',
      },
      inputContainer: {
        backgroundColor: '#BDD5EA',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 10,
      },
      inputText: {
        fontSize: 16,
        backgroundColor: '#BDD5EA'
      },
      modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderColor: 'black'
      },
      dropdownItemText: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderColor: 'black',
      },
      button: {
        marginTop: 20,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
      },
  });