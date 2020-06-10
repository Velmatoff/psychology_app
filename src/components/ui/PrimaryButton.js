import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TextApp} from './Text';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';


export const PrimaryButton = ({title}) => {
    return(
        <View style={{
            flex: 1,
            backgroundColor: Colors.orange,
            borderRadius: 5,
            minHeight: 43,
            shadowColor: "rgba(100, 99, 99, 0.29)",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
        }}>
            <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <TextApp style={{color: Colors.white, fontFamily: 'DM Sans', fontWeight: 'bold', fontSize: 16}}>{title}</TextApp>
            </TouchableOpacity>
        </View>
    )
};
