import {Platform, StyleSheet, Text, View} from "react-native";
import ProductsPage from "./Products"
import OrdersPage from "./Orders"
import DefaultPage from "./Default"

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();
const ProductsTitle = "Product";
const OrdersTitle = "Order";
const DefaultTitle = "Default";

export default function Dashboard({navigation}) {
    return (
        <Tabs.Navigator
        initialRouteName={DefaultTitle} component={DefaultPage}
        screenOptions={(route)=>{

        }}>
            <Tabs.Screen name={ProductsTitle} component={ProductsPage}/>
            <Tabs.Screen name={OrdersTitle} component={OrdersPage}/>
        </Tabs.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 25 : 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})