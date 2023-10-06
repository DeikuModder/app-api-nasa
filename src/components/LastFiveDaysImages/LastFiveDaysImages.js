import { ScrollView, StyleSheet, Text, View } from "react-native";
import PostImages from "./PostImages";

export default function LastFiveDaysImages({lastFiveDaysImages}){

    return (
        <View style={styles.container}>
            
            <Text style={styles.title}>Last 5 Days</Text>

            <ScrollView style={styles.content}>
                
                {lastFiveDaysImages.map((item, index) => {
                    return (
                        <PostImages title={item.title} date={item.date} url={item.url} explanation={item.explanation} obj={item} key={index}/>
                    )
                })}

            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },
    title: {
        fontSize: 15,
        color: 'white',
        marginBottom: 20
    },
    content: {
        paddingHorizontal: 24,
    }
})