import React from 'react';
import {Text,StyleSheet} from 'react-native';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';



export const TextApp = ({children, style}) => {
    return(
        <Text style={{...styles.text, ...style}}>
            {children}
        </Text>
    )
};

const styles = StyleSheet.create({
   text: {
       fontSize: 15,
       fontFamily: Fonts.normal,
       color: Colors.blackText,
   }
});
