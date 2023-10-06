import { Image, StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <Text style={styles.title}>
                    Explore
                </Text>
            </View>

            <View style={styles.rightContainer}>
                <Image source={require('../../assets/NASA_logo.png')} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    image: {
        width: 60,
        height: 60
    }
})