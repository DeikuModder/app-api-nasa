import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../views/Home/Home"
import Details from "../views/Details/Details"

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName="Home" screenOptions={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#171717'}, headerTintColor: 'white', headerTitleStyle: {fontWeight: 'bold'}}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}