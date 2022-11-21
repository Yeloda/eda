import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const width = Dimensions.get('window').width

const Card = (props) => {
    return (
        <TouchableOpacity style={{height: 400,width: width-20, alignSelf: 'center',marginTop: props.marginTop,}}>
            <View>
                <Image 
                    source={{uri: props.image}} 
                    style={{height:200,width:'100%',borderRadius: 10}}
                />

                <View style={{marginTop: -70,marginLeft: 5,flexDirection:'row'}}>
                    { props.category.map(e => {
                        return (
                            <View key={Math.random()} style={{backgroundColor: '#bb4b2d',height: 35,alignItems: 'center',justifyContent: 'center',marginLeft: 15,}}>
                                <Text style={{fontSize: 12,color:'white',fontWeight: 'bold',marginLeft: 8,marginRight: 8,}}>{e}</Text>
                            </View>
                        )
                    })}
                </View>

                <View style={{marginTop: 10,marginLeft: 15,flexDirection:'row'}}>
                    <View style={{backgroundColor: 'black',height: 45,alignItems: 'center',justifyContent: 'center',}}>
                        <Text style={{fontSize: 18,color:'white',fontWeight: 'bold',marginLeft: 5,marginRight: 10,}}>{props.title}</Text>
                    </View>
                </View>
                { props. rocket != '' && (
                    <View style={{marginTop: 5,marginLeft: 15,flexDirection:'row'}}>
                        <View style={{backgroundColor: 'black',height: 45,alignItems: 'center',justifyContent: 'center',}}>
                            <Text style={{fontSize: 18,color:'white',fontWeight: 'bold',marginLeft: 5,marginRight: 10,}}>{props.rocket}</Text>
                        </View>
                    </View>
                )}

                { props.description != '' && (<Text style={{color:'white',marginLeft: 15,marginTop: 10,}}>{props.description}</Text>)}

                <View style={{flexDirection:'row', marginTop: 15,alignItems: 'center',}}>
                    <Image 
                        source={{uri: props.authorAvatar}} 
                        style={{width:50,height:50,borderRadius: 40, }}
                    />
                    <View>
                        <View style={{flexDirection:'row',alignItems: 'center',}}>
                            <Text style={{color:'white', fontSize: 16,marginLeft: 10,}}>by</Text>
                            <Text style={{color:'white', fontWeight: 'bold',fontSize: 17,marginLeft: 5,}}>{props.authorName}</Text>
                        </View>
                        <Text style={{color:'white',marginLeft: 10,color: '#EF5323'}}>{props.date}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({})