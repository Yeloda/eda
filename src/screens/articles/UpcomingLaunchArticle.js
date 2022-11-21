import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UpcomingLaunchArticle = ({navigation, route}) => {

    console.log(route.params);

    return (
        <View>
            <Text>UpcomingLaunchArticle</Text>
        </View>
    )
}

export default UpcomingLaunchArticle

const styles = StyleSheet.create({})