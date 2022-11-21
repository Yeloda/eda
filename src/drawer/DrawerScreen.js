import React from 'react'
import { Dimensions, Image, Linking, StyleSheet, TouchableOpacity, View } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import UpcomingScreen from '../screens/UpcomingScreen';
import CustomDrawer from '../drawer/CustomDrawer';
import ArticleScreen from '../screens/ArticleScreen';
import AboutScreen from '../screens/AboutScreen';
import PreviousLaunchesScreen from '../screens/PreviousLaunchesScreen';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {

    const LogoTitle = () => {
        return (
            <View style={{padding: 20,flexDirection:'row', alignItems: 'center',justifyContent: 'space-between',width:Dimensions.get('window').width-60}}>
                <Image
                    style={{ width: 205, height: 50 }}
                    source={require('../../assets/EDA_Logo_White.png')}
                />

                <AntDesign name="search1" size={24} color="white" />
            </View>
        );
    }

    const header = (title) => {
        return (
            { 
                headerTitle: (props) => <LogoTitle {...props} />,
                headerStyle: { backgroundColor: '#1c1c1c', height: 100 },
                headerTintColor: 'white',
                headerTitleStyle: { fontWeight: 'bold' },
                headerBackTitleVisible: false
            }
        )
    }

    return (
        <Drawer.Navigator 
            drawerContent={props => <CustomDrawer {...props}/>}
            screenOptions={{drawerLabelStyle: {color:'white'}}}
        >
            <Drawer.Screen name="Home" component={HomeScreen} options={header()}/>
            <Drawer.Screen name="Upcoming Launches" component={UpcomingScreen} options={header()}/>
            <Drawer.Screen name="Previous Launches" component={PreviousLaunchesScreen} options={header()}/>
            <Drawer.Screen name="Post and Articles" component={ArticleScreen} options={header()}/>
            {/* <Drawer.Screen name="Shop" component={UpcomingScreen} onPress={() => Linking.openURL("https://shop.everydayastronaut.com/")}/> */}
            <Drawer.Screen name="About Us" component={AboutScreen} options={header()}/>
        </Drawer.Navigator>
    )
}

export default DrawerScreen

const styles = StyleSheet.create({})