import LoginPage from './screens/loginPage';
import SignUpPage from './screens/signUpPage';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="login" component={LoginPage} options={{headerShown:false}}/>
                <Stack.Screen name="signUp" component={SignUpPage} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

