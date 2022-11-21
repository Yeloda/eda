import React from 'react'
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import ArticleCard from '../components/ArticleCard'
import Footer from '../components/Footer'

const width = Dimensions.get('window').width

const PostScreen = ({ navigation, route }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#1c1c1c',}}>
            <Image source={{uri: 'https://everydayastronaut.com/wp-content/uploads/2020/12/About_Us_Header.png'}} style={{width:width, height: 300}} />

            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: -30,}}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize: 28,}}>Featured Posts and</Text>
            </View>
            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: 10,}}>
                <Text style={{color:'white',fontWeight: 'bold',fontSize: 28,}}>Articles</Text>
            </View>


            <View style={{backgroundColor: 'black', alignSelf: 'center',alignItems: 'center',justifyContent: 'center',padding: 10,marginTop: 20,width:width-20}}>
                <Text style={{color:'white',margin: 20}}>
                    Tim Dodd creates in-depth videos about the complex topics of spaceflight and rocketry. From serious scientific topics like different rocket engine types, to fun articles about the biggest facepalms in spaceflight history. Down below you can find the article versions of these videos and also featured posts we want you to read, which can be used for reference purposes. Enjoy!
                </Text>
            </View>

            <Text style={{color:'white',fontSize: 34,textAlign:'center',marginTop: 20,marginBottom: 20,}}>Featured Articles</Text>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2022/10/signal-2022-10-15-195626_002-768x432.jpeg'
                title='Why Astronauts Do Fighter Jet Training'
                description='Ever since the early days of human spaceflight, astronauts had to go through fighter jet training, just like the crew of Polaris Dawn does. '
                category={['Articles']}
                authorName='Florian Kordina'
                date='October 15, 2022'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2022/07/IMG_3988-768x432.jpg'
                title='Raptor 1 vs Raptor 2: What did SpaceX change?'
                description='SpaceX is developing the Raptor engine powering Starship. See what improvements they already made going from Raptor 1 to 2 in this article. '
                category={['Articles,','SpaceX']}
                authorName='Trevor Sesnic'
                date='July 14, 2022'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2022/10/Engine_cycles_article_copy-1-768x432.jpg'
                title='Rocket Engine Cycles'
                description='This article discusses different types of rocket engine cycles, from pressure-fed through gas generator, to full-flow staged combustion. '
                category={['Articles']}
                authorName='Andy Law'
                date='April 28, 2022'
            />

            <View style={{width:width-30,alignSelf: 'center',}}>
                <Button title='Load More' color="#EF5323"/>
            </View>

            {/* INTERVIEWS */}
            <Text style={{color:'white',fontSize: 34,textAlign:'center',marginTop: 20,marginBottom: 20,}}>Interviews</Text>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2021/12/Peter_Beck_Interview_Thumbmail_WEBSITE-768x432.png'
                title='Neutron Update | Interview with Peter Beck'
                description='Tim Dodd, the Everyday Astronaut, interviewed Rocket Lab CEO and founder Peter Beck about their upcoming vehicle, Neutron. '
                category={['Articles,','Rocket Lab']}
                authorName='Trevor Sesnic'
                date='December 19, 2021'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2021/08/Elon-768x432.png'
                title='Starbase Tour and Interview with Elon Musk'
                description="Tim Dodd, the Everyday Astronaut, interviewed Elon Musk about Starship, its development, Raptor, Starbase, and Musk's engineering philosophy."
                category={['Articles,','SpaceX']}
                authorName='Trevor Sesnic'
                date='August 11, 2021'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2020/05/Terry-Virts-Interview-768x509.jpg'
                title='Terry Virts Interview: IMAX Space Filmmaker'
                description="Making a movie in space? Shooting out-of-this-world photographs? Space Shuttle pilot and International Space Station commander Terry Virts did this and more, before Tom Cruise! Everyday… "
                category={['Articles,','Interview']}
                authorName='Austin DeSisto'
                date='Mai 21, 2020'
            />


            <View style={{width:width-30,alignSelf: 'center',marginTop: 30,}}>
                <Button title='Load More' color="#EF5323"/>
            </View>



            {/* Starship Updates */}
            <Text style={{color:'white',fontSize: 34,textAlign:'center',marginTop: 20,marginBottom: 20,}}>Starship Updates</Text>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2022/03/Featured-Image-1-EDA-LOGO-768x512.jpg'
                title='Starship Orbital Launch Timeline Checklist [S24 and B7] | Live Updates'
                description="LIVE UPDATES leading up to the first orbital launch attempt with Ship 24 and Booster 7 from Starbase in South Texas, United States. "
                category={['Live Updates,','SpaceX']}
                authorName='Austin DeSisto'
                date='March 31, 2022'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2021/08/Timelapse-Three-92-768x513.jpg'
                title='Will Booster 4 and Ship 20 Fly? | Live Updates'
                description="LIVE UPDATES leading up to the first orbital launch attempt with Booster 4 and Ship 20 from Starbase in South Texas, United States. "
                category={['Live Updates,','SpaceX']}
                authorName='Austin DeSisto'
                date='August 4, 2021'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2021/07/B3-Featured-Image-1-1-768x512.jpg'
                title='When will Booster 3 Static Fire? | Live Updates'
                description="LIVE UPDATES for the testing of the first Super Heavy booster, Booster 3. Follow to constant updates on what's next in testing."
                category={['Live Updates,','SpaceX']}
                authorName='Austin DeSisto'
                date='July 14, 2021'
            />

            <View style={{width:width-30,height:1, alignSelf: 'center',backgroundColor: 'grey',marginTop: 25,marginBottom: 25,}}/>

            <ArticleCard 
                image='https://everydayastronaut.com/wp-content/uploads/2021/04/SN11-Mar-8-2021-9045-768x512.jpg'
                title='When will SN15 launch? | Live Updates'
                description="LIVE UPDATES for the testing and launch of Starship SN15. SpaceX will be attempting to launch its next prototype on another test flight. "
                category={['Live Updates,','SpaceX,','Test Flight']}
                authorName='Austin DeSisto'
                date='April 8, 2021'
            />

            <View style={{width:width-30,alignSelf: 'center',}}>
                <Button title='Load More' color="#EF5323"/>
            </View>


            <Footer />


            <View style={{height: 50}}/>
        </ScrollView>
    )
}

export default PostScreen

const styles = StyleSheet.create({})