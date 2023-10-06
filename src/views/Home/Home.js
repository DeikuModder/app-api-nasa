import { StyleSheet, View, Text} from "react-native";
import Header from "../../components/Header";
import TodaysImage from "../../components/TodaysImage/TodaysImage";
import LastFiveDaysImages from "../../components/LastFiveDaysImages/LastFiveDaysImages";
import fetchData from '../../utils/fetchApi';
import LoadingScreen from "../../utils/LoadingScreen";
import { useEffect, useState } from "react";
import { format, subDays } from "date-fns";

const MY_APY_KEY = 'IhsJ9i6tCqUQcpc2jrPmJtm3qD7R5Om9qkssOTwQ';
const API_URL = 'https://api.nasa.gov/planetary/apod'

export default function Home() {

    const [todaysImage, setTodaysImage] = useState({});
    const [lastFiveDaysImage, setLastFiveDaysImage] = useState([]);

    useEffect(() => {
        const showTodaysImage = async () => {
            try {
                
                const tImage = await fetchData(API_URL, MY_APY_KEY)
                setTodaysImage(tImage);

            } catch (error) {
                console.error(error)
                setTodaysImage({})
            }
        }

        const showLast5DaysImages = async () => {
            try {
                const DATE = new Date();
                const YESTERDAY_DATE = format(subDays(DATE, 1), 'yyyy-MM-dd')
                const FIVEDAYSAGO_DATE = format(subDays(DATE, 5), 'yyyy-MM-dd')

                const lastFiveDaysImagesResponse = await fetchData(API_URL, MY_APY_KEY, `start_date=${FIVEDAYSAGO_DATE}&end_date=${YESTERDAY_DATE}`)

                setLastFiveDaysImage(lastFiveDaysImagesResponse)
              
            } catch (error) {
                console.error(error)
                setLastFiveDaysImage([])
            }
        }

        showTodaysImage().catch(null)
        showLast5DaysImages().catch(null)
    }, [])
    
    return (
        <View style={styles.container}>
            <Header />
            <LoadingScreen objectName={todaysImage} fallback={<TodaysImage title={todaysImage.title} url={todaysImage.url} date={todaysImage.date} explanation={todaysImage.explanation} obj={todaysImage}/>}/>
            <LoadingScreen objectName={lastFiveDaysImage} fallback={<LastFiveDaysImages lastFiveDaysImages={lastFiveDaysImage}/>}/>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'rgba(7, 26, 93, 255)',
    }
})