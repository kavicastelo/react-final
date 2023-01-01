import {Text, View, StyleSheet} from "react-native";

export default function Login(){
    return(
        <View style={styles.container}>
            <Text> Hello Login Page </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})