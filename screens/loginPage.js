import {Text, View, StyleSheet, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function Login({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.v2}></View>
                <View style={styles.v1}>
                    <LinearGradient colors={['#f1c40f', '#d35400']} style={styles.bg}/>
                </View>
            </View>
            <View style={styles.middle}>
                <Text style={styles.headerText}>Login</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad animi
                    consectetur, deleniti, </Text>

                <View style={{height:140,justifyContent:'space-between'}}>
                    <TextInput
                        label="Email"
                        variant="outlined"
                        leading={props => <Icon name="email" {...props} />}
                        color="#f1c40f"
                    />
                    <TextInput
                        label="Password"
                        variant="outlined"
                        secureTextEntry={true}
                        leading={props => <Icon name="lock" {...props} />}
                        color="#f1c40f"
                    />
                </View>

                <TouchableOpacity style={styles.btn}>
                    <LinearGradient colors={['#f1c40f', '#d35400']} style={styles.bgBtn}>
                        <Text style={styles.btnText}>Login <Icon name="arrow-right"/></Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <Text>Don't have an account? <Text style={{color:'#d35400'}} onPress={()=>{navigation.navigate("signUp")}}>Sign Up</Text></Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"
    },
    top: {
        height: '30%',
        width:'100%',
        overflow:"hidden",
        position:"absolute"
    },
    middle: {
        flex: 1,
        justifyContent: "space-between",
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '20%',
        paddingBottom: '20%',
    },
    bottom: {
        height: '20%',
        alignItems:"center",
        justifyContent:"center"
    },
    v1: {
        height: 120,
        width: 180,
        transform: [{rotate: '-40deg'}],
        borderRadius: 20,
        position: "absolute",
        right: -55,
        top: 12
    },
    bg: {
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,

        elevation: 5,
    },
    bgBtn: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,

        elevation: 5,
    },
    v2: {
        height: 130,
        width: 180,
        transform: [{rotate: '-30deg'}],
        borderRadius: 20,
        position: "absolute",
        right: -30,
        top: 5,
        backgroundColor: '#f1c40f'
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 40,
        marginTop:'50%'
    },
    text: {
        fontWeight: "normal",
        fontSize: 18
    },
    btn: {
        height: 40,
        width: 150,
        borderRadius: 20,
        alignSelf: "flex-end"
    },
    btnText: {
        color: 'white',
        fontWeight: "bold"
    }
})