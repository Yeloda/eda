import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'


const CustomDrawer = (props) => {
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor: '#1c1c1c',}} style={{height:'100%',backgroundColor: '#1c1c1c',}}>
                <View style={{padding: 20}}>
                    <Image source={require('../../assets/EDA_Logo_White.png')} style={{resizeMode: 'stretch',height:50, width:200}}/>
                </View>
                <DrawerItemList {...props} style={{color:'white'}}/>
                <TouchableOpacity style={{marginLeft: 20,marginTop: 20,}} onPress={() => Linking.openURL("https://shop.everydayastronaut.com/")}>
                    <Text style={{color:'white',fontWeight: 'bold',}}>Shop</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>

            {/* Bottom of drawer */}
            {/* <View style={{backgroundColor: 'red',}}>
                <Text>test</Text>
            </View> */}
        </View>
    )
}

export default CustomDrawer

const styles = StyleSheet.create({})