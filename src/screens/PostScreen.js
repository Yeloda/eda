import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width

const PostScreen = ({ navigation, route }) => {
    return (
        <View>
            <Image source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2020/12/About_Us_Header.png'}} style={{width:width, height: 300}} />
        </View>
    )
}

export default PostScreen

const styles = StyleSheet.create({})