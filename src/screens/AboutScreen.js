import React, { useState } from 'react'
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import { AntDesign, Entypo, Ionicons, MaterialIcons } from '@expo/vector-icons'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

import Footer from '../components/Footer'
import TeamMember from '../components/TeamMember'

const width = Dimensions.get('window').width

const AboutScreen = () => {

    const [message, setMessage] = useState('')


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1c1c1c',}}>
            <Image source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2020/12/About_Us_Header.png'}} style={{width:width, height: 300}} />

            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: -30,}}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize: 28,}}>Bringing space down to</Text>
            </View>
            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: 10,}}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize: 28,}}>Earth for everyday</Text>
            </View>
            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: 10,}}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize: 28,}}>people.</Text>
            </View>

            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: 20,width:width-30}}>
                <Text style={{color:'white',margin: 20,fontSize: 15,}}>
                    Everyday Astronaut’s mission is to bring space down to Earth for everyday people. To celebrate and lift up those who are helping humanity explore the world we live on and our place amongst the stars. We believe the best way to get people excited about space exploration is through education. By breaking down complex topics, it helps give some perspective and insight into the decisions made every day through the industry. We help remove the barriers of intimidating subject matter to help foster an excited public to cheer on those who are pushing the boundaries and help inspire future generations. The point is, rocket science is awesome, and you don’t need to be a rocket scientist to be excited.
                </Text>
            </View>

            <Image 
                source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2020/12/Tim_Mk1.png'}} 
                style={{width: width-30,height:500,alignSelf: 'center',marginTop: 30,}}
            />

            <View style={{width:width-30,alignSelf: 'center',marginTop: 30,}}>
                <Text style={{fontWeight: 'bold',fontSize: 28,color:'white'}}>Tim Dodd</Text>
                <Text style={{color:'grey'}}>THE EVERYDAY ASTRONAUT / OWNER</Text>
                <Text style={{color:'white',fontSize: 16,}}>Tim Dodd started Everyday Astronaut in 2014 as an art project on Instagram. A then-professional photographer, Tim took pictures of himself in a Russian high altitude flight suit as part of a viral photo series. In the making of that series, his love for spaceflight snowballed into an obsession.</Text>
                <Text style={{color:'white',marginTop: 10,fontSize: 16,}}>As his knowledge grew, he wanted to teach the things he was getting excited about and found photography to be the wrong outlet. So in 2017, without any real game plan, Dodd took to YouTube full time to try and make easy to understand videos about spaceflight. </Text>
                <Text style={{color:'white',marginTop: 10,fontSize: 16,}}>Since then, Everyday Astronaut has grown to be one of the top outlets in spaceflight. Dodd’s mantra of quality over quantity shows with hour-long documentary-style videos featuring original graphics, music and on-site footage. Fans of Everyday Astronaut may be familiar with Tim’s response to timelines with “When it’s done™”.</Text>
                <Text style={{color:'white',marginTop: 10,fontSize: 16,}}>The channel, officially recognised as media, has become a trusted friend to the industry: attending the biggest events, and getting exclusive access to the most influential people in spaceflight. Most notably, interviews with SpaceX’s Elon Musk, Former NASA Admin, Jim Bridenstine, and Rocket Lab’s Peter Beck.</Text>
                <Text style={{color:'white',marginTop: 10,fontSize: 16,}}>In 2019 the team grew from just Tim to a small army of incredible helpers who make this website amazing, the videos higher quality, and help foster a fun and positive online community.</Text>
            </View>

            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop: 20,}}>
                <AntDesign name="youtube" size={30} color="white" />
                <AntDesign name="twitter" size={30} color="white" style={{marginLeft: 20,}}/>
                <AntDesign name="instagram" size={30} color="white" style={{marginLeft: 20,}}/>
                <Entypo name="facebook" size={30} color="white" style={{marginLeft: 20,}}/>
            </View>


            <Text style={{color:'white',textAlign:'center',fontSize: 32,marginTop: 20,}}>Meet the team</Text>

            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2021/03/IMG_20210320_150320.jpg'
                name='Florian Kordina'
                role='Team Manager / Contributor'
                twitter='yes'
                instagram='yes'
                linkedin='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2021/05/Claire_Percival_website_image.jpg'
                name='Claire Percival'
                role='Editor / Contributor'
                twitter='yes'
                instagram='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2021/11/Head-Shot-1.jpg'
                name='Chuck Boudreaux'
                role='Editor'
                twitter='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2019/11/Andy_Law_greyscale-970x970-1.png'
                name='Andy Law'
                role='Contributor'
                twitter='yes'
                facebook='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2020/11/IMG_6916-1.jpg'
                name='Austin Desisto'
                role='Contributor'
                twitter='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2021/05/Mariia_pic_for_the_website_cropped.png'
                name='Mariia Kiseleva'
                role='Contributor'
                twitter='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2021/08/DDF94CB2-7420-4EDE-840E-310EAA9D4B0EIMG_1311-rotated-1518449399-1634638185339.jpg'
                name='Trevor Sesnic'
                role='Contributor'
                twitter='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2020/12/image0.jpg'
                name='Andrew Taylor'
                role='Producer / Video Editor'
                twitter='yes'
                instagram='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2020/12/Mask-Group-1.png'
                name='Jeffrey Maas'
                role='Software Engineer'
                twitter='yes'
                linkedin='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2020/11/ben.jpg'
                name='Ben Stineman'
                role='Drone Operator / Network Engineer'
                twitter='yes'
                instagram='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2020/11/olemathias-headshot-e1534452691823.jpg'
                name='Ole Mathias Aa. Heggem'
                role='Web Administrator / Developer'
                twitter='yes'
                instagram='yes'
                mail='yes'
            />
            <TeamMember
                image='https://everydayastronaut.com/wp-content/uploads/2021/03/Caspar-website.png'
                name='Caspar Stanley'
                role='3D Artist / Game Developer'
                twitter='yes'
                youtube='yes'
                link='yes'
            />


            <Text style={{color:'white',textAlign:'center',fontSize: 38,marginTop: 20,}}>Contact Us</Text>

            <View style={{width:width-30,alignSelf: 'center',}}>
                <Input
                    placeholder='Name'
                    leftIcon={
                        <Ionicons name="person" size={24} color="grey" />
                    }
                />
                <Input
                    placeholder='Email'
                    leftIcon={
                        <MaterialIcons name="email" size={24} color="grey" />
                    }
                />
                <Input
                    placeholder='Message'
                />

            </View>

            <View style={{width: 200,alignSelf: 'center',borderRadius:20}}>
                <Button title='CONTACT US' color="#EF5323"/>
            </View>

            <Footer />

            <View style={{height: 50}}/>
        </ScrollView>
    )
}

export default AboutScreen

const styles = StyleSheet.create({})