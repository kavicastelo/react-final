import {useState} from "react";
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Platform,
    Button,
    TouchableOpacity
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function LandingPage({navigation}) {

    let [qty, setQty] = useState(1);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.titleTag}>
                <Icon style={styles.titleIcon} name='keyboard-backspace'/>
                <Icon style={styles.titleIcon} name='bookmark-outline'/>
            </View>
            <ImageBackground style={styles.mainImage}
                             source={require('../assets/detailsPage/chair1.png')}/>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.imageTypes}>
                <View style={styles.supportedImagesWrapper}>
                    <Image style={styles.supportedImages}
                           source={require('../assets/detailsPage/chair1.png')}/>
                </View>
                <View style={styles.supportedImagesWrapper}>
                    <Image style={styles.supportedImages}
                           source={require('../assets/detailsPage/chair2.jpg')}/>
                </View>
                <View style={styles.supportedImagesWrapper}>
                    <Image style={styles.supportedImages}
                           source={require('../assets/detailsPage/chair3.jpg')}/>
                </View>
                <View style={styles.supportedImagesWrapper}>
                    <Image style={styles.supportedImages}
                           source={require('../assets/detailsPage/chair4.jpeg')}/>
                </View>
                <View style={styles.supportedImagesWrapper}>
                    <Image style={styles.supportedImages}
                           source={require('../assets/detailsPage/chair5.jpg')}/>
                </View>
            </ScrollView>

            <Text style={styles.itemTitle}>Lydia Accent Chair</Text>
            <Text style={styles.price}>$180.00</Text>
            <Text style={{marginLeft: 10, fontWeight: 'bold', marginTop: 20}}>Quantity</Text>
            <View style={styles.quantityWrapper}>
                <Button title='-' onPress={() => {
                    if (qty === 1) {
                    } else {
                        setQty(--qty)
                    }
                }}></Button>
                <Text style={{padding: 10}}>{qty}</Text>
                <Button title='+' onPress={() => {
                    setQty(++qty)
                }}></Button>
            </View>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error molestiae placeat provident quam
                suscipit unde veritatis voluptatibus. Adipisci aliquid animi, asperiores consectetur dicta, eos ex
                exercitationem impedit labore, provident sit.</Text>

            <TouchableOpacity style={styles.addBtnWrapper}>
                <Icon style={{color: 'white',fontSize:20,marginRight:10}} name='cart'/>
                <Text style={{paddingTop:10,paddingBottom:10,color:'white',fontSize:20,fontWeight:'bold'}}>Add to cart</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 25 : 20,
        flex: 1,
    },
    titleTag: {
        width: '100%',
        height: 30,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20
    },
    titleIcon: {
        fontSize: 20
    },
    mainImage: {
        width: '100%',
        height: 300
    },
    imageTypes: {
        height: 100,
        width: '100%',
        padding: 15
    },
    supportedImagesWrapper: {
        width: 80,
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    supportedImages: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    itemTitle: {
        marginLeft: 10,
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",

    },
    price: {
        fontSize: 21,
        color: '#3498db',
        fontWeight: "bold",
        marginLeft: 10
    },
    quantityWrapper: {
        flexDirection: "row",
        paddingLeft: 10,
        marginTop: 5,
        alignItems: "center"
    },
    description:{
        textAlign:"justify",
        fontSize:18,
        marginTop:10,
        paddingLeft:10,
        paddingRight:10
    },
    addBtnWrapper:{
        width:'90%',
        alignSelf:"center",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor:'#3498db',
        marginTop:20,
        marginBottom:20
    }
})