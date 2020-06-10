import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Image} from 'react-native';
import Colors from '../styles/Colors';
import {TextApp} from '../ui/Text';
import Fonts from '../styles/Fonts';


export const MainCard = ({img, title, onPress}) => {
    return(
            <TouchableOpacity onPress={onPress} style={styles.card} delayPressIn={50}>
                <Image style={{flex:2, resizeMode: 'contain', marginTop: 10}} source={img}/>
                <View style={{flex: 1}}>
                    <TextApp style={{fontFamily: Fonts.medium, paddingTop: 10}}>{title}</TextApp>
                </View>
            </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    card: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: Colors.white,
        flex: 1,
        borderRadius: 8,
        elevation: 3,
        marginRight: 15,
        marginLeft: 15,
    }
});
