import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'

const width = Dimensions.get('window').width

const TeamMember = (props) => {
    return (
        <View style={{marginTop: 30,}}>
            <Image source={{uri: props.image}} style={{width:width-30,height:400,alignSelf: 'center',}} />

            <View style={{marginLeft: 15,}}>
                <Text style={{color:'white',fontSize: 24,fontWeight: 'bold',marginTop: 10,}}>{props.name}</Text>
                <Text style={{color:'grey',fontSize: 18,}}>{props.role}</Text>

                <View style={{flexDirection: 'row',marginLeft: -10,marginTop: 10,}}>
                    { props.twitter && (<AntDesign name="twitter" size={30} color="white" style={{marginLeft: 10,}}/>)}
                    { props.facebook && (<Entypo name="facebook" size={30} color="white" style={{marginLeft: 10,}}/>)}
                    { props.instagram && (<AntDesign name="instagram" size={30} color="white" style={{marginLeft: 10,}}/>)}
                    { props.linkedin && (<AntDesign name="linkedin-square" size={30} color="white" style={{marginLeft: 10,}}/>)}
                    { props.mail && (<AntDesign name="mail" size={30} color="white" style={{marginLeft: 10,}}/>)}
                    { props.youtube && (<AntDesign name="youtube" size={30} color="white" style={{marginLeft: 10,}}/>)}
                    { props.link && (<Entypo name="link" size={30} color="white" style={{marginLeft: 10,}}/>)}
                </View>
            </View>

        </View>
    )
}

export default TeamMember

const styles = StyleSheet.create({})