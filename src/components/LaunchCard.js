import React from 'react'
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get('window').width

const LaunchCard = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            style={{height: 200,width: width-20, alignSelf: 'center',marginTop: 10}}
            onPress={() => navigation.navigate('UpcomingLaunchArticle',{props})}
        >

            <View style={{width:width-30,alignSelf: 'center',}}>
                <Image 
                    source={{uri: props.image != '' ? props.image : null}} 
                    style={{width:'100%',height:'100%',borderRadius:8}}
                />

                <View style={{backgroundColor: props.bgcolor,height:'100%',width:10,borderRadius:2,position: 'absolute',}} />

                <View style={{position: 'absolute',width:'100%',height:'100%',flexDirection:'row',marginLeft: 15,}}>
                    <Text style={{color:'#FFFFFF',fontSize: 45,}}>{props.number}</Text>
                    <View style={{backgroundColor: '#FFFFFF', height: 40, width:1,marginTop: 15,marginLeft: 10,}}/>
                    <View>
                        <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',marginLeft: 10,marginTop: 10,width:'70%'}}>{props.title}</Text>

                        {props.author != '' ? (
                            <View style={{flexDirection:'row', marginTop: 10,}}>
                                <Text style={{color:'white'}}>Article by</Text>
                                <Text style={{color:'white', fontWeight: 'bold',}}> {props.author}</Text>
                            </View>
                        ) : (
                            <View style={{marginTop: 10,}}/>
                        )}

                        <View>
                            {props.data.map(e => {
                                return(
                                    <Text key={Math.random()} style={{color:'white',fontWeight: 'bold',fontSize: 12,width:'84.5%'}}>·  {e}</Text>
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default LaunchCard

const styles = StyleSheet.create({})