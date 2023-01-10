import {Text, View, StyleSheet, TouchableOpacity, ScrollView} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function SignUp({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.v2}></View>
                <View style={styles.v1}>
                    <LinearGradient colors={['#f1c40f', '#d35400']} style={styles.bg}/>
                </View>
            </View>
            <ScrollView style={styles.middle}>
                <Text style={styles.headerText}>Register</Text>
                <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Text>

                <View style={{height:210,justifyContent:'space-between',marginTop:10}}>
                    <TextInput
                        label="Email"
                        variant="outlined"
                        leading={props => <Icon name="email" {...props} />}
                        color="#f1c40f"
                    />
                    <TextInput
                        label="Full Name"
                        variant="outlined"
                        leading={props => <Icon name="account" {...props} />}
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

                <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('landingPage')}}>
                    <LinearGradient colors={['#f1c40f', '#d35400']} style={styles.bgBtn}>
                        <Text style={styles.btnText}>Signup <Icon name="arrow-right"/></Text>
                    </LinearGradient>
                </TouchableOpacity>
                <ScrollView horizontal={true} style={{marginTop:20}}>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Text style={styles.btnText}>Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Text style={styles.btnText}>Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSocial}>
                        <Text style={styles.btnText}>LinkedIn</Text>
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            <View style={styles.bottom}>
                <Text>Already have an account? <Text style={{color:'#d35400'}} onPress={()=>{navigation.navigate("login")}}>Log In</Text></Text>
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
        position:"absolute",
    },
    middle: {
        flex: 1,
        paddingLeft: '10%',
        paddingRight: '10%',
        paddingTop: '10%',
        paddingBottom: '10%',
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
        marginBottom:5,
        marginTop:'50%'
    },
    text: {
        fontWeight: "normal",
        fontSize: 18,
        marginBottom:10
    },
    btn: {
        height: 40,
        width: 150,
        borderRadius: 20,
        alignSelf: "flex-end",
        marginTop:5
    },
    btnText: {
        color: 'white',
        fontWeight: "bold"
    },
    btnSocial:{
        height: 40,
        width: 150,
        borderRadius: 20,
        backgroundColor:'#d35400',
        alignItems:"center",
        justifyContent:"center"
    }
})