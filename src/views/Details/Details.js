import { useRoute } from "@react-navigation/native";
import Header from "../../components/Header";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

export default function Details(){
    const {params} = useRoute()

    return (
       <View style={styles.container}>
        <Header />

        <View style={styles.content}>
            <Image source={{uri: params.url}} style={styles.image}/>

            <Text style={styles.title}>{params.title}</Text>

            <Text style={styles.date}>{params.date}</Text>

            <ScrollView style={styles.scrollContent}>
                <Text style={styles.explanation}>{params.explanation}</Text>
            </ScrollView>
        </View>   
            

       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(7, 26, 93, 255)',
        padding: 15
    },
    content: {
        backgroundColor: '#2c449d',
        borderRadius: 32,
        marginVertical: 25,
        padding: 15,
        alignItems: 'center',
        flex: 1
    },
    image: {
        width: '100%',
        height: '50%',
        borderRadius: 32,
        borderWidth: 2,
        borderColor: 'white',
        marginBottom: 15
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center'
    },
    date: {
        color: "white",
        fontSize: 16
    },
    scrollContent: {
        marginVertical: 15
    },
    explanation: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'

    }
})