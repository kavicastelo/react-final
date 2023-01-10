import {View, ScrollView, Text, StyleSheet} from "react-native";

export default function LandingPage({navigation}) {
    return(
        <ScrollView style={styles.container}>
            <View style={styles.cardOuter}>
                <View style={styles.cardInner}></View>
            </View>
            <Text style={styles.title1}>Best Selling</Text>

            <ScrollView horizontal={true} style={styles.cardItem1Wrapper}>
                <View style={styles.cardItem1}>
                    <View style={styles.cardItem1Icon}></View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardItem1Image}>
                            <img src="https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png" alt=""/>
                        </View>
                        <Text style={styles.cardItem1Title}>Title 1</Text>
                        <Text style={styles.cardItem1Desc}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={styles.cardItem1Price}>$270.00</Text>
                    </View>
                </View>

                <View style={styles.cardItem1}>
                    <View style={styles.cardItem1Icon}></View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardItem1Image}>
                            <img src="https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png" alt=""/>
                        </View>
                        <Text style={styles.cardItem1Title}>Title 1</Text>
                        <Text style={styles.cardItem1Desc}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={styles.cardItem1Price}>$270.00</Text>
                    </View>
                </View>

                <View style={styles.cardItem1}>
                    <View style={styles.cardItem1Icon}></View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardItem1Image}>
                            <img src="https://www.pngplay.com/wp-content/uploads/2/Modern-Chair-PNG-HD-Quality.png" alt=""/>
                        </View>
                        <Text style={styles.cardItem1Title}>Title 1</Text>
                        <Text style={styles.cardItem1Desc}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={styles.cardItem1Price}>$270.00</Text>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    cardOuter:{
        width:'100%',
        height:200,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
    },
    cardInner:{
        width:'100%',
        height:'100%',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title1:{
        color:'black',
        fontWeight:"bold",
        paddingLeft:15
    },
    cardItem1Wrapper:{
        flexDirection:"row",
    },
    cardItem1:{
        width:160,
        justifyContent:"center",
        alignItems:"center",
        padding:15,
        position:"relative"
    },
    cardItem1Icon:{
        width:40,
        height:40,
        backgroundColor:'blue',
        position:"absolute",
        right:0,
        bottom:0,
        borderRadius:5
    },
    cardItem1Image:{
        width:'100%',
    },
    cardItem1Title:{
        color:'black',
        fontWeight:"bold",
        paddingLeft:5
    },
    cardItem1Desc:{
        fontSize:10,
        color:'gray',
        paddingLeft:5
    },
    cardItem1Price:{
        color:'blue',
        fontSize:15,
        fontWeight:"bold",
        paddingLeft:5
    }
})