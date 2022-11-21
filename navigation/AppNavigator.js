import { StyleSheet } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerScreen from '../src/drawer/DrawerScreen';
import AuthorScreen from '../src/screens/AuthorScreen';
import PostScreen from '../src/screens/PostScreen';
import CategoryScreen from '../src/screens/CategoryScreen';
import NextEventScreen from '../src/screens/NextEventScreen';
import PrelaunchScreen from '../src/screens/PrelaunchScreen';
import UpcomingLaunchArticle from '../src/screens/articles/UpcomingLaunchArticle';

const Stack = createNativeStackNavigator();

const AppNavigator = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="DrawerScreen" component={DrawerScreen} options={{ headerShown: false }}/>
                <Stack.Screen name="AuthorScreen" component={AuthorScreen} />
                <Stack.Screen name="PostScreen" component={PostScreen} />
                <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
                <Stack.Screen name="NextEventScreen" component={NextEventScreen} />
                <Stack.Screen name="PrelaunchScreen" component={PrelaunchScreen} />
                <Stack.Screen name="UpcomingLaunchArticle" component={UpcomingLaunchArticle} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})