import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TodaysImage({title, url, date, explanation, obj}){
    const {navigate} = useNavigation();

    const handleViewPress = () => {
        navigate('Details', {title, url, date, explanation, obj})
    }

    return(
        <View style={styles.container}>
       
            <Image source={{uri : url}} style={styles.image}/>

            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.bottomContainer}>
                <View style={styles.dateContainer}>
                    <Text style={{fontSize: 17, color: 'white'}}>{date}</Text>
                </View>
            
                <View style={styles.btnContainer}>
                    <Pressable onPress={handleViewPress}>
                         <Text style={{fontSize: 17, color: 'white'}}>View</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 15,
        marginHorizontal: 25,
        borderRadius: 32,
        padding: 15,
        
    },
    image: {
        width: '100%',
        height: 190,
        borderColor: 'white',
        borderWidth: 2, 
        borderRadius: 32
    },
    dateContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    btnContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    bottomContainer: {
        flexDirection: 'row',
        padding: 10
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    }
})