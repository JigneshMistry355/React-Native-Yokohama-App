
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        container: {
                padding: 20,
                backgroundColor: '#000',
              },
        headerText: {
                fontSize: 20,
                fontWeight: 'bold',
                color: '#ff0000',
                marginBottom: 20,
              },
        sectionHeader: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#ff0000',
                marginVertical: 10,
              },
        sectionHeaderAdditional : {
                color : '#ccc',
        },

        input: {
                borderWidth: 1,
                borderColor: '#ff0000',
                color: '#fff',
                padding: 10,
                marginVertical: 5,
              },

        button: {
                backgroundColor: '#ff0000',
                padding: 10,
                marginVertical: 10,
                borderRadius: 5,
              },

        buttonText: {
                color: '#fff',
                textAlign: 'center',
              },

        camera: {
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
                height: 400,
                backgroundColor: '#000',
        },

        cameraControls: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: 20,
              },

        capturedImage: {
                width: 200,
                height: 200,
                marginVertical: 10,
              },

        radioButton: {
                backgroundColor: '#000',
              },

        radioLabel: {
                color: '#ccc',
              },
    
});

export default styles;