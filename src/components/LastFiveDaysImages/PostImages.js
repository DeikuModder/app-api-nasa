import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function PostImages({title, url, date, explanation, obj}){
    const {navigate} = useNavigation();

    const handleViewPress = () => {
        navigate('Details', {title, url, date, explanation, obj})
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.bottomContainer}>
                <View style={styles.dateContainer}>
                    <Text style={{fontSize: 15, color: 'white'}}>{date}</Text>
                </View>
            
                <View style={styles.btnContainer}>
                    <Pressable onPress={handleViewPress}>
                         <Text style={{fontSize: 15, color: 'white'}}>View</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18, 39, 113, 255)',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
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
        padding: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})