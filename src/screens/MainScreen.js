import React from 'react';
import {View, ImageBackground, ScrollView} from 'react-native';
import Style from '../components/styles/Styles';
import {Header} from '../components/header/Header';
import Colors from '../components/styles/Colors';
import {MainCard} from '../components/main/MainCard';
import {GradientBackground} from '../components/GradientBackground';

export const MainScreen = ({navigation}) => {
    return (

        <GradientBackground>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, marginTop: 20, marginBottom: 20}}>
                    <MainCard
                        onPress={()=> navigation.navigate('BodyNutritionStackScreen')}
                        title='Питание тела'
                        img={require('../assets/main/1.png')}
                    />
                    <MainCard
                        title='Питание жизни'
                        img={require('../assets/main/2.png')}
                    />
                    <MainCard
                        title='Питание эмоций'
                        img={require('../assets/main/3.png')}
                    />
                    <MainCard
                        title='Питание дневник'
                        img={require('../assets/main/4.png')}
                    />
                </View>
            </ScrollView>
        </GradientBackground>


    );
};
