import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'

const width = Dimensions.get('window').width

const Footer = () => {
    return (
        <>
            <View style={{width:width-30,height:1,alignSelf: 'center',backgroundColor:'grey', marginTop: 40,}}/>

            <View style={{alignItems: 'center',justifyContent: 'center',padding: 40}}>
                <Image 
                    source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2020/10/EDA_Logo_White.png'}} 
                    style={{resizeMode: 'stretch',height:70, width:220, }}
                />

                <Text style={{color:'#EC5222',marginTop: 20,}}>© Copyright Everyday Astronaut</Text>
            </View>


            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop: -20,}}>
                <AntDesign name="youtube" size={30} color="white" />
                <AntDesign name="twitter" size={30} color="white" style={{marginLeft: 15,}}/>
                <AntDesign name="instagram" size={30} color="white" style={{marginLeft: 15,}}/>
                <Entypo name="facebook" size={30} color="white" style={{marginLeft: 15,}}/>
            </View>

            <View style={{justifyContent: 'center',alignItems: 'center',}}>
                <FontAwesome5 name="patreon" size={104} color="white"  style={{alignSelf: 'center',marginTop: 20,}}/>
                <Text style={{color:'white',padding:40,paddingTop:0,textAlign:'center'}}>Help support Everyday Astronaut by becoming a Patreon member today! Get exclusive access to Discord, and help in the process of creating content.</Text>
            </View>

            {/* SHOP CARD */}
            <View style={{width: width-30,alignSelf: 'center',height:170,borderRadius:10,overflow: 'hidden',}}>
                <View style={{backgroundColor: 'black',height: 180,transform: [{ rotate: "-30deg" }],marginTop: -80,marginLeft: -60,}} />
                <View style={{backgroundColor: 'white',height: 180,transform: [{ rotate: "-30deg" }],marginTop: -30,marginRight: -100,}} />

                <View style={{position: 'absolute',top:30, backgroundColor: '#EF5323',width:140,height:5}}/>
                <View style={{position: 'absolute',top:50, backgroundColor: '#EF5323',width:100,height:5}}/>

                <View style={{position: 'absolute',top:90, backgroundColor: '#EF5323',height:50,alignItems: 'center',justifyContent: 'center',padding: 10}}>
                    <Text style={{color:'white'}}>SHOP NOW</Text>
                </View>

                <View style={{position: 'absolute',top:70, right: 5, height:50,alignItems: 'center',justifyContent: 'center',padding: 10}}>
                    <Image 
                        source={{uri: 'https://cdn.shopify.com/s/files/1/0043/0502/7185/products/EA_FLATS_051.jpg?v=1654917660&height=400'}} 
                        style={{width:70,height:70}}
                    />
                    <View style={{backgroundColor: 'black',width:70,height: 30,alignItems: 'center',justifyContent: 'center',borderRadius:7}}>
                        <Text style={{color:'white'}}>$59.99</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Footer

const styles = StyleSheet.create({})