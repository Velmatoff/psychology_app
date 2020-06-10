import Colors from './styles/Colors';
import {ImageBackground} from 'react-native';
import React from 'react';


export const GradientBackground = ({children}) => {
    return(
        <ImageBackground
            source={require('../assets/Layer_1.png')}
            style={{flex:1,backgroundColor: Colors.white}}
            imageStyle={{height: '50%' ,width: '100%', top: undefined, }}
        >
            {children}
        </ImageBackground>

    )
};
