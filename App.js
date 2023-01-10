import LoginPage from './screens/loginPage';
import SignUpPage from './screens/signUpPage';
import LandingPage from './screens/landingPage';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="landingPage" component={LandingPage} options={{headerShown:true}}/>
                <Stack.Screen name="login" component={LoginPage} options={{headerShown:false}}/>
                <Stack.Screen name="signUp" component={SignUpPage} options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

