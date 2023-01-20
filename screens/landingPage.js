import {useState} from "react";
import {View, ScrollView, Text, StyleSheet, Platform, Image, Dimensions, Button} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function LandingPage({navigation}) {

    const bannerWidth = Dimensions.get('window').width

    const images = [
        'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Shop-Products-Social-Media-Banner-Design-Template-1180x664.jpg',
        'https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Editable-Furniture-Store-Advertising-Banner-Design-Template-scaled.jpg',
        'https://img.freepik.com/free-vector/realistic-summer-sale-banner-template-with-photo_23-2148962927.jpg?w=2000'
    ];

    const [imgActive, setImgActive] = useState(0);

    const onChange = (nativeEvent) => {
        const slide = Math.ceil(nativeEvent.contentOffset.x/nativeEvent.layoutMeasurement.width);
        if (slide !== imgActive){
            setImgActive(slide);
        }
    }

    return (
        <ScrollView style={styles.container}>

            <Button onPress={()=>{navigation.navigate('dashboard')}} title='navigate'></Button>

            <View style={styles.cardOuter}>
                <View style={styles.cardInner}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        onScroll={({nativeEvent}) => onChange(nativeEvent)}
                        pagingEnabled={true}
                        style={{width: '100%', height: 200}}
                    >
                        {
                            images.map((e, index) =>
                                <Image
                                    style={{width: bannerWidth-30,height:200,borderRadius:5}}
                                    key={e}
                                    resizeMode='stretch'
                                    source={{uri:e}}
                                />
                            )
                        }
                    </ScrollView>
                    <View style={{position:'absolute',flexDirection:'row',alignSelf:'center',bottom:0}}>
                        {
                            images.map((e,index) =>
                                <Text
                                    key={e}
                                    style={imgActive === index ? styles.dotActive : styles.dot}
                                >●</Text>
                            )
                        }
                    </View>
                </View>
            </View>

            <Text style={styles.title1}>Best Selling</Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.cardItem1Wrapper}>
                <View style={styles.cardItem1}>
                    <View style={styles.cardItem1Icon}><Icon style={styles.icon} name="bookmark-outline"/></View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardItem1Image}>
                            <Image style={styles.supportedImages}
                                   source={require('../assets/landingPage/chair1.png')}/>
                        </View>
                        <Text style={styles.cardItem1Title}>Title 1</Text>
                        <Text style={styles.cardItem1Desc}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={styles.cardItem1Price}>$180.00</Text>
                    </View>
                </View>

                <View style={styles.cardItem1}>
                    <View style={styles.cardItem1Icon}><Icon style={styles.icon} name="bookmark-outline"/></View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardItem1Image}>
                            <Image style={styles.supportedImages}
                                   source={require('../assets/landingPage/chair2.jpg')}/>
                        </View>
                        <Text style={styles.cardItem1Title}>Title 2</Text>
                        <Text style={styles.cardItem1Desc}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={styles.cardItem1Price}>$230.00</Text>
                    </View>
                </View>

                <View style={styles.cardItem1}>
                    <View style={styles.cardItem1Icon}><Icon style={styles.icon} name="bookmark-outline"/></View>
                    <View style={styles.cardInner}>
                        <View style={styles.cardItem1Image}>
                            <Image style={styles.supportedImages}
                                   source={require('../assets/landingPage/chair3.jpg')}/>
                        </View>
                        <Text style={styles.cardItem1Title}>Title 3</Text>
                        <Text style={styles.cardItem1Desc}>Lorem ipsum dolor sit amet.</Text>
                        <Text style={styles.cardItem1Price}>$120.00</Text>
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'ios' ? 25 : 20,
        flex: 1,
    },
    cardOuter: {
        width: '100%',
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    cardInner: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5,
    },
    title1: {
        color: 'black',
        fontWeight: "bold",
        paddingLeft: 15,
        fontSize: 20
    },
    cardItem1Wrapper: {
        flexDirection: "row",
    },
    cardItem1: {
        width: 160,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        position: "relative"
    },
    cardItem1Icon: {
        padding: 5,
        backgroundColor: '#e67e22',
        position: "absolute",
        right: 0,
        bottom: 0,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: 'white',
        fontSize: 25
    },
    cardItem1Image: {
        width: '100%',
    },
    supportedImages: {
        width: '100%',
        height: 160,
        borderRadius: 10,
    },
    dotActive:{
        margin:3,
        color:'black',
    },
    dot:{
        margin:3,
        color:'white',
    },
    cardItem1Title: {
        color: 'black',
        fontWeight: "bold",
        paddingLeft: 5
    },
    cardItem1Desc: {
        fontSize: 10,
        color: 'gray',
        paddingLeft: 5
    },
    cardItem1Price: {
        color: '#3498db',
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 5
    }
})