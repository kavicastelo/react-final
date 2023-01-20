import {Platform, StyleSheet, Text, View} from "react-native";


export default function Orders({navigation}) {
    return(
        <View style={styles.container}>
            <Text>Orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 25 : 20,
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    }
})