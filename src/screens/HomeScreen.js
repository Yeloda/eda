import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { Animated, Button, Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CountDown from 'react-native-countdown-component';

import Carousel from 'react-native-reanimated-carousel';
import Card from '../components/Card';
import Footer from '../components/Footer';

const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation }) => {

    const [indexItem, setIndexItem] = useState(0)
    
    var index_temp = 0

    const list_posts = [
        {
            image: 'https://everydayastronaut.com/wp-content/uploads/2022/03/Featured-Image-1-EDA-LOGO.jpg',
            category: 'Live Updates',
            title: 'Starship Orbital Launch Timeline Checklist [S24 and B7] | Live Updates',
            authorImage: 'https://secure.gravatar.com/avatar/0478e2220876442a1087ca431f4b86a1?s=96&d=identicon&r=g',
            authorName: 'Austin DeSisto',
            date: 'March 31, 2022'
        },
        {
            image: 'https://everydayastronaut.com/wp-content/uploads/2022/11/52218116096_54843d4c22_o.jpg',
            category: 'NASA',
            title: 'Dragon CRS-2 SpX-26 | Falcon 9 Block 5',
            authorImage: 'https://secure.gravatar.com/avatar/0478e2220876442a1087ca431f4b86a1?s=96&d=identicon&r=g',
            authorName: 'Austin DeSisto',
            date: 'November 16, 2022'
        },
        {
            image: 'https://everydayastronaut.com/wp-content/uploads/2021/04/LM4C2.jpg',
            category: 'Chinese Space Program',
            title: 'Yaogan 34-03 | Long March 4C',
            authorImage: 'https://secure.gravatar.com/avatar/3865449332759d57436b1545c86f7de2?s=96&d=identicon&r=g',
            authorName: 'Trevor Sesnic',
            date: 'November 15, 2022'
        },
        {
            image: 'https://everydayastronaut.com/wp-content/uploads/2022/10/signal-2022-10-15-195626_002.jpeg',
            category: 'Articles',
            title: 'Why Astronauts Do Fighter Jet Training',
            authorImage: 'https://secure.gravatar.com/avatar/a98bfbd57d23e24756d6c412b7680140?s=96&d=identicon&r=g',
            authorName: 'Florian Kordina',
            date: 'October 15, 2022'
        },
    ]


    const renderPost = (index) => {
        const item = list_posts[index]

        return(
            <TouchableOpacity 
                style={{flex: 1,justifyContent: 'center',width:'110%',marginLeft: '-5%',}}
                onPress={() => {navigation.navigate('PostScreen', {item})}}
            >
                <ImageBackground source={{uri: item.image}} style={{height:'100%'}}/>

                <View style={{position: 'absolute', bottom: 0, width:'100%',backgroundColor: 'rgba(0,0,0,.5)',padding: 20}}>
                    <Text style={{fontWeight: 'bold',color:'white', marginTop: 10,}}>{item.category}</Text>
                    <Text style={{color:'white',fontSize: 24,}}>{item.title}</Text>

                    <View style={{flexDirection:'row', marginTop: 15,alignItems: 'center',}}>
                        <Image source={{uri: item.authorImage}} style={{width:50,height:50,borderRadius: 40, }}/>
                        <View>
                            <View style={{flexDirection:'row',alignItems: 'center',}}>
                                <Text style={{color:'white', fontSize: 16,marginLeft: 10,}}>by</Text>
                                <Text style={{color:'white', fontWeight: 'bold',fontSize: 17,marginLeft: 5,}}>{item.authorName}</Text>
                            </View>
                            <Text style={{color:'white',marginLeft: 10,}}>{item.date}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const scrollBegin = () => {  
        index_temp != 3 ? index_temp += 1 : index_temp = 0
        setIndexItem(index_temp)
    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1c1c1c',}}>
            <Carousel
                loop
                width={width}
                height={width + 100}
                autoPlay={true}
                autoPlayInterval={4000}
                data={list_posts}
                scrollAnimationDuration={1000}
                onScrollBegin={scrollBegin}
                mode='parallax'
                renderItem={({ index }) => renderPost(index)}
                style={{marginTop: -20,}}
            />

            <View style={{flexDirection:'row',marginTop: -35,marginBottom: 20,alignSelf: 'center',}}>
                { list_posts.map((e,index) => {
                    return (
                        <View 
                            key={Math.random()}
                            style={{
                                width: index == indexItem ? 30 : 13,
                                height: 13,
                                borderRadius:10,
                                marginRight: 10,
                                backgroundColor: index == indexItem ? '#ef5323' : '#863820',
                            }} 
                        />
                    )
                })}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('NextEventScreen')} style={{width: width-20, alignSelf: 'center',height: 100,}}>
                <Image
                    source={{uri: 'https://everydayastronaut.com/wp-content/uploads/Prelaunch-Preview/ABL/RS1.jpeg'}} 
                    style={{width:'100%',height:'100%',borderRadius: 8}}
                />

                <View style={{position: 'absolute',alignSelf: 'center',zIndex: 10,top: 10}}>
                    <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',}}>
                        <Text style={{color:'white',fontWeight: 'bold',}}>T -</Text>
                        <CountDown
                            size={19}
                            until={1000}
                            digitStyle={{backgroundColor: 'transparent'}}
                            digitTxtStyle={{color: 'white'}}
                            separatorStyle={{color: 'white'}}
                            timeToShow={['H', 'M', 'S']}
                            timeLabels={{m: null, s: null}}
                            showSeparator
                        />
                    </View>

                    <Text style={{marginTop: -10,fontSize: 20,fontWeight: 'bold',color:'white',textShadowColor: 'rgba(0, 0, 0, 0.75)',textShadowOffset: {width: -1, height: 1},textShadowRadius: 10}}>RS1 | Maiden Flight</Text>
                </View>
            </TouchableOpacity>

            {/* PRELAUNCH PREVIEW */}
            <Text style={{textAlign:'center',color:'white',marginTop: 20,fontSize: 30,}}>Latest Prelaunch Preview</Text>
            <Card 
                image='https://everydayastronaut.com/wp-content/uploads/2022/11/52218116096_54843d4c22_o-768x512.jpg'
                category={['NASA','Prelaunch Preview','SpaceX']}
                title='Dragon CRS-2 SpX-26 | Falcon 9'
                rocket='Block 5'
                description='SpaceX will be launching the 26th, CRS-26, Commercial Resupply Service mission for NASA to the International Space Station.'
                authorName='Austin DeSisto'
                authorAvatar='https://secure.gravatar.com/avatar/0478e2220876442a1087ca431f4b86a1?s=26&d=identicon&r=g'
                date='November 15, 2022'
                marginTop={20}
            />

            <Card 
                image='https://everydayastronaut.com/wp-content/uploads/2022/11/51818622981_a51f8e400e_o-1-768x512.jpg'
                category={['Prelaunch Preview','SpaceX','Starlink']}
                title='Starlink Group 2-4 | Falcon 9'
                rocket='Block 5'
                description='SpaceX is set to launch ~53 Starlink satellites to low-Earth orbit atop its Falcon 9 Block 5 rocket on the Starlink Group 2-4 mission. '
                authorName='Trevor Sesnic'
                authorAvatar='https://secure.gravatar.com/avatar/3865449332759d57436b1545c86f7de2?s=26&d=identicon&r=g'
                date='November 15, 2022'
                marginTop={40}
            />

            {/* POST LAUNCH REVIEW */}
            <Text style={{textAlign:'center',color:'white',marginTop: 20,fontSize: 30,}}>Latest Post Launch Reviews</Text>
            <Card 
                image='https://everydayastronaut.com/wp-content/uploads/2021/09/ceres-1-768x436.jpg'
                category={['Chinese Space Program','Post Launch Review']}
                title='Jilin-1 High Resolution 03D-08'
                rocket='51 to 54 | Ceres-1'
                description='Galactic Energy successfully launched the Ceres-1 rocket carrying five Jilin-1 High Resolution satellites to a Sun-synchronous orbit. '
                authorName='Mariia Kiseleva'
                authorAvatar='https://secure.gravatar.com/avatar/c081f26e2cf3406396eae89df26bb80b?s=26&d=identicon&r=g'
                date='November 19, 2022'
                marginTop={20}
            />

            <Card 
                image='https://everydayastronaut.com/wp-content/uploads/2021/04/LM4C2-768x432.jpg'
                category={['Chinese Space Program','Post Launch Review']}
                title='Yaogan 34-03 | Long March 4C'
                rocket=''
                description='The Chinese Ministry of National Defense successfully launched the Yaogan 34-03 satellite to low-Earth orbit on its Long March 4C.'
                authorName='Trevor Sesnic'
                authorAvatar='https://secure.gravatar.com/avatar/3865449332759d57436b1545c86f7de2?s=26&d=identicon&r=g'
                date='November 15, 2022'
                marginTop={40}
            />


            {/* SHOP CARD */}
            <View style={{width: width-30,alignSelf: 'center',height:170,borderRadius:10,overflow: 'hidden',}}>
                <View style={{backgroundColor: 'black',height: 180,transform: [{ rotate: "-30deg" }],marginTop: -80,marginLeft: -60,}} />
                <View style={{backgroundColor: 'white',height: 180,transform: [{ rotate: "-30deg" }],marginTop: -30,marginRight: -100,}} />

                <Text style={{position: 'absolute',color:'white',top:10,left:15, fontSize: 15,}}>Awesome spaceflight and</Text>
                <Text style={{position: 'absolute',color:'white',top:35,left:15, fontSize: 15,}}>rocket merch!</Text>

                <View style={{position: 'absolute',top:70, backgroundColor: '#EF5323',width:140,height:5}}/>
                <View style={{position: 'absolute',top:90, backgroundColor: '#EF5323',width:100,height:5}}/>

                <View style={{position: 'absolute',top:110, backgroundColor: '#EF5323',height:50,alignItems: 'center',justifyContent: 'center',padding: 10}}>
                    <Text style={{color:'white'}}>Visit the Everyday Astronaut Shop</Text>
                </View>

                <View style={{position: 'absolute',top:45, right: -5, height:50,alignItems: 'center',justifyContent: 'center',padding: 10}}>
                    <Image 
                        source={{uri: 'https://cdn.shopify.com/s/files/1/0043/0502/7185/products/EA_FLATS_051.jpg?v=1654917660&height=400'}} 
                        style={{width:50,height:50}}
                    />
                    <View style={{backgroundColor: 'black',width:70,height: 30,alignItems: 'center',justifyContent: 'center',borderRadius:7}}>
                        <Text style={{color:'white'}}>$59.99</Text>
                    </View>
                </View>
            </View>


            {/* LATEST FEATURED ARTICLES */}
            <Text style={{textAlign:'center',color:'white',marginTop: 20,fontSize: 30,}}>Latest Featured Articles</Text>
            <Card 
                image='https://everydayastronaut.com/wp-content/uploads/2022/10/signal-2022-10-15-195626_002.jpeg'
                category={['Articles']}
                title='Why Astronauts Do Fighter Jet'
                rocket='Training'
                description=''
                authorName='Florian Kordina'
                authorAvatar='https://secure.gravatar.com/avatar/a98bfbd57d23e24756d6c412b7680140?s=96&d=identicon&r=g'
                date='October 15, 2022'
                marginTop={20}
            />

            <Card 
                image='https://everydayastronaut.com/wp-content/uploads/2022/07/IMG_3988-768x432.jpg'
                category={['Articles','SpaceX']}
                title='Raptor 1 vs Raptor 2: What did'
                rocket='SpaceX change ?'
                description=''
                authorName='Trevor Sesnic'
                authorAvatar='https://secure.gravatar.com/avatar/3865449332759d57436b1545c86f7de2?s=26&d=identicon&r=g'
                date='July 14, 2022'
                marginTop={-30}
            />
            

            {/* FEATURED POSTS */}
            <Text style={{textAlign:'center',color:'white',marginTop: -40,fontSize: 30,}}>Featured Posts</Text>
            <View style={{width:width-30,height: 120,alignSelf: 'center',marginTop: 20,}}>
                <Image 
                    source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2022/10/signal-2022-10-15-195626_002-768x432.jpeg'}} 
                    style={{width:'100%',height:'100%',borderRadius:8}}
                />

                <View style={{position: 'absolute',justifyContent: 'space-evenly',alignItems: 'center',width:'100%',height:'100%',flexDirection:'row',}}>
                    <Text style={{color:'#FFFFFF',fontSize: 45,}}>1</Text>
                    <View style={{backgroundColor: '#FFFFFF', height: 40, width:1}}/>
                    <View>
                        <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',}}>Why Astronauts Do Fighter</Text>
                        <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',}}>Jet Training</Text>
                    </View>
                </View>
            </View>
            <View style={{width:width-30,height: 120,alignSelf: 'center',}}>
                <Image 
                    source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2021/09/Alpha_FLTA001_lift_off_2-768x432.png'}} 
                    style={{width:'100%',height:'100%',borderRadius:8}}
                />

                <View style={{position: 'absolute',justifyContent: 'space-evenly',alignItems: 'center',width:'100%',height:'100%',flexDirection:'row',}}>
                    <Text style={{color:'#FFFFFF',fontSize: 45,}}>2</Text>
                    <View style={{backgroundColor: '#FFFFFF', height: 40, width:1}}/>
                    <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',}}>FLTA002 To The Black | Alpha</Text>
                </View>
            </View>
            <View style={{width:width-30,height: 120,alignSelf: 'center',}}>
                <Image 
                    source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2022/03/Featured-Image-1-EDA-LOGO-768x512.jpg'}} 
                    style={{width:'100%',height:'100%',borderRadius:8}}
                />

                <View style={{position: 'absolute',justifyContent: 'space-evenly',alignItems: 'center',width:'100%',height:'100%',flexDirection:'row',}}>
                    <Text style={{color:'#FFFFFF',fontSize: 45,}}>3</Text>
                    <View style={{backgroundColor: '#FFFFFF', height: 40, width:1}}/>
                    <View>
                        <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',}}>Starship Orbital Launch</Text>
                        <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',}}>Timeline Checklist [S24 and</Text>
                        <Text style={{color:'#FFFFFF',fontSize: 18,fontWeight: 'bold',}}>B7] | Live Updates</Text>
                    </View>
                </View>
            </View>


            {/* WHEN IT'S DONE */}
            <View style={{marginTop: 50,}}>
                <Image source={{uri:'https://everydayastronaut.com/wp-content/uploads/Rocket-Rundown/EverydayAstronaut-WhenItsDoneTm-1024x533.png'}} style={{width:width,height:200}} />
            </View>


            <Footer />

            <View style={{height: 100}}/>
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})