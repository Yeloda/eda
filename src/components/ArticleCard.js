import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width

const Card = (props) => {
    return (
        <TouchableOpacity style={{height: 400,width: width-20, alignSelf: 'center',marginTop: props.marginTop,}}>
            <View>
                <Image 
                    source={{uri: props.image}} 
                    style={{height:200,width:'100%',borderRadius: 5}}
                />

                <View style={{marginLeft: 5,}}>
                    <View style={{marginTop: 15,flexDirection:'row'}}>
                        { props.category.map(e => {
                            return (
                                <Text key={Math.random()} style={{fontSize: 16,color:'#EF5323',fontWeight: 'bold',marginRight: 8,}}>{e}</Text>
                            )
                        })}
                    </View>

                    <View style={{marginTop: 10,flexDirection:'row'}}>
                        <Text style={{fontSize: 18,color:'white',fontWeight: 'bold',marginRight: 10,}}>{props.title}</Text>
                    </View>

                    { props.description != '' && (<Text style={{color:'white',marginTop: 10,}}>{props.description}</Text>)}

                    <View style={{flexDirection:'row', marginTop: 15,alignItems: 'center',}}>
                        <View style={{flexDirection:'row',alignItems: 'center',}}>
                            <Text style={{color:'white', fontSize: 12,}}>by</Text>
                            <Text style={{color:'white', fontWeight: 'bold',fontSize: 12,marginLeft: 5,}}>{props.authorName}</Text>
                        </View>
                        <Text style={{color:'white',marginLeft: 5,color: '#EF5323'}}>· on {props.date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({})