import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000',
    },
    headerText: {
      color: '#FFF',
      fontSize: 24,
      marginBottom: 20,
      fontFamily: 'Poppins_700Bold',
    },
    mpinContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    mpinInput: {
      height: 50,
      width: 50,
      borderColor: '#FF0000',
      borderWidth: 1,
      marginHorizontal: 5,
      textAlign: 'center',
      fontSize: 24,
      color: '#FFF',
      fontFamily: 'Poppins_700Bold',
    },
    button: {
      backgroundColor: '#FF0000',
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 5,
    },
    buttonText: {
      color: '#FFF',
      fontSize: 18,
      fontFamily: 'Poppins_700Bold',
    },
  });

  export default styles;