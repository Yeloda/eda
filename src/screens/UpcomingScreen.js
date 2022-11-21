import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LaunchCard from '../components/LaunchCard'
import { AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons'

const width = Dimensions.get('window').width

const UpcomingScreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1c1c1c',}}>

            <View style={{backgroundColor: 'black',width: width-30, alignSelf: 'center',marginTop: 30,}}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize: 24,marginLeft: 20,marginTop: 10,}}>Legend</Text>

                <View style={{flexDirection:'row', marginTop: 10,marginLeft: 20,alignItems: 'center',}}>
                    <View style={{backgroundColor: '#05A755',width: 65,height: 30,borderRadius:5}}/>
                    <Text style={{color:'white',marginLeft: 10,fontSize: 16,}}>Confirmed Launch Date</Text>
                </View>
                <View style={{flexDirection:'row', marginTop: 10,marginLeft: 20,alignItems: 'center',}}>
                    <View style={{backgroundColor: '#E8E400',width: 65,height: 30,borderRadius:5}}/>
                    <Text style={{color:'white',marginLeft: 10,fontSize: 16,}}>Unconfirmed Launch Date</Text>
                </View>
                <View style={{flexDirection:'row', marginTop: 10,marginLeft: 20,alignItems: 'center',marginBottom: 15,}}>
                    <View style={{backgroundColor: '#e23535',width: 65,height: 30,borderRadius:5}}/>
                    <Text style={{color:'white',marginLeft: 10,fontSize: 16,}}>TBD</Text>
                </View>
            </View>

            <LaunchCard
                number={1}
                image='https://everydayastronaut.com/wp-content/uploads/Prelaunch-Preview/ABL/RS1.jpeg'
                title='Maiden Flight | RS1'
                author='Mariia Kiseleva'
                data={['ABL SPACE SYSTEM', 'PACIFIC SPACEPORT COMPLEX, ALASKA, USA', 'SUN NOV 20 2022 23:00:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={2}
                image=''
                title='Falcon 9 Block 5 | Eutelsat 10B'
                author=''
                data={['SPACEX', 'CAPE CANAVERAL, FL, USA', 'TUE NOV 22 2022 03:57:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={3}
                image='https://everydayastronaut.com/wp-content/uploads/2022/11/52218116096_54843d4c22_o.jpg'
                title='Dragon CRS-2 SpX-26 | Falcon 9 Block 5'
                author='Austin DeSisto'
                data={['SPACEX', 'KENNEDY SPACE CENTER, FL, USA', 'TUE NOV 22 2022 21:54:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={4}
                image=''
                title='Pléiades Neo 5 & 6 | Vega'
                author=''
                data={['China Aerospace Science and Technology Corporation', 'Xichang Satellite Launch Center, People\'s Republic of China ', 'Thu Nov 24 2022 14:48:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={5}
                image='https://everydayastronaut.com/wp-content/uploads/2021/04/39900441_1985441264827545_966922203482292224_o.jpg'
                title='Dragon CRS-2 SpX-26 | Falcon 9 Block 5'
                author='Andy Law'
                data={['KOUROU, FRENCH GUIANA', 'FRI NOV 25 2022 02:47:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={6}
                image='https://everydayastronaut.com/wp-content/uploads/Prelaunch-Preview/ISRO/pslv.jpg'
                title='EOS-6 (Oceansat-3) | PSLV'
                author='Andy Law'
                data={['Indian Space Research Organization', 'Sriharikota, Republic of India','SAT NOV 26 2022 07:26:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={7}
                image=''
                title='Falcon 9 Block 5 | Hakuto-R M1 & Lunar Flashlight'
                author=''
                data={['SPACEX', 'CAPE CANAVERAL, FL, USA','MON NOV 28 2022 09:46:00 UTC+0100']}
                bgcolor='green'
            />
            <LaunchCard
                number={8}
                image=''
                title='Falcon 9 Block 5 | OneWeb 15'
                author=''
                data={['SPACEX', 'KENNEDY SPACE CENTER, FL, USA','WED NOV 30 2022 01:00:00 UTC+0100']}
                bgcolor='#E8E400'
            />
            <LaunchCard
                number={9}
                image='https://everydayastronaut.com/wp-content/uploads/2022/11/51818622981_a51f8e400e_o-1.jpg'
                title='Starlink Group 2-4 | Falcon 9 Block 5'
                author='Trevor Sesnic'
                data={['SPACEX', 'VANDERBERG SFB, CA, USA','WED NOV 30 2022 01:00:00 UTC+0100']}
                bgcolor='#E8E400'
            />
            <LaunchCard
                number={10}
                image=''
                title='Long March 2F/G | Shenzhou 15'
                author=''
                data={['China Aerospace Science and Technology Corporation', 'Jiuquan, People\'s Republic of China ','WED NOV 30 2022 01:00:00 UTC+0100']}
                bgcolor='#E8E400'
            />

            {/* FOOTER */}

            {/* DIVIDER */}
            <View style={{width:width-30,height:1,alignSelf: 'center',backgroundColor:'grey', marginTop: 40,}}/>

            <View style={{alignItems: 'center',justifyContent: 'center',padding: 40}}>
                <Image 
                    source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2020/10/EDA_Logo_White.png'}} 
                    style={{resizeMode: 'stretch',height:70, width:220, }}
                />

                <Text style={{color:'#EC5222',marginTop: 20,}}>© Copyright Everyday Astronaut</Text>
            </View>


            <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop: -20,}}>
                <AntDesign name="youtube" size={30} color="white" />
                <AntDesign name="twitter" size={30} color="white" style={{marginLeft: 15,}}/>
                <AntDesign name="instagram" size={30} color="white" style={{marginLeft: 15,}}/>
                <Entypo name="facebook" size={30} color="white" style={{marginLeft: 15,}}/>
            </View>

            <View style={{justifyContent: 'center',alignItems: 'center',}}>
                <FontAwesome5 name="patreon" size={104} color="white"  style={{alignSelf: 'center',marginTop: 20,}}/>
                <Text style={{color:'white',padding:40,paddingTop:0,textAlign:'center'}}>Help support Everyday Astronaut by becoming a Patreon member today! Get exclusive access to Discord, and help in the process of creating content.</Text>
            </View>

            {/* SHOP CARD */}
            <View style={{width: width-30,alignSelf: 'center',height:170,borderRadius:10,overflow: 'hidden',}}>
                <View style={{backgroundColor: 'black',height: 180,transform: [{ rotate: "-30deg" }],marginTop: -80,marginLeft: -60,}} />
                <View style={{backgroundColor: 'white',height: 180,transform: [{ rotate: "-30deg" }],marginTop: -30,marginRight: -100,}} />

                <View style={{position: 'absolute',top:30, backgroundColor: '#EF5323',width:140,height:5}}/>
                <View style={{position: 'absolute',top:50, backgroundColor: '#EF5323',width:100,height:5}}/>

                <View style={{position: 'absolute',top:90, backgroundColor: '#EF5323',height:50,alignItems: 'center',justifyContent: 'center',padding: 10}}>
                    <Text style={{color:'white'}}>SHOP NOW</Text>
                </View>

                <View style={{position: 'absolute',top:70, right: 5, height:50,alignItems: 'center',justifyContent: 'center',padding: 10}}>
                    <Image 
                        source={{uri: 'https://cdn.shopify.com/s/files/1/0043/0502/7185/products/EA_FLATS_051.jpg?v=1654917660&height=400'}} 
                        style={{width:70,height:70}}
                    />
                    <View style={{backgroundColor: 'black',width:70,height: 30,alignItems: 'center',justifyContent: 'center',borderRadius:7}}>
                        <Text style={{color:'white'}}>$59.99</Text>
                    </View>
                </View>
            </View>

            <View style={{height: 50}}/>
        </ScrollView>
    )
}

export default UpcomingScreen

const styles = StyleSheet.create({})