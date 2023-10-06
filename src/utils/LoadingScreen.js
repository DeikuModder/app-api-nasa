import { View, StyleSheet, Text } from 'react-native';

export default function LoadingScreen(props){

    const isObjEmpty = (objectName) => {
        return (
          objectName &&
          Object.keys(objectName).length === 0 &&
          objectName.constructor === Object
        );
    };

    if (isObjEmpty(props.objectName) || props.objectName.length === 0){

        return (
            <View style={styles.loadContainer}>
              <Text style={{fontSize: 30, color: 'white'}}>Loading...</Text>
            </View>
        )
        
    } 
    else {
    
        return (
            <>{props.fallback}</>
        )
    
    }
}

const styles = StyleSheet.create({
    loadContainer: {
      padding: 10,
      marginHorizontal: 25,
      marginVertical: 15,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 32,
      flex: .4,
    }
  })