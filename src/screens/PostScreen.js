import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width

const PostScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>PostScreen</Text>
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({})