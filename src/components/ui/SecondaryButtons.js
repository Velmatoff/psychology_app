import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {TextApp} from '../ui/Text';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';
import {GradientView} from './GradientView';


export const SecondaryButtons = ({right, left, setBtnSelect, btnSelect}) => {

    const onPressLeft = () => {
        setBtnSelect('right');
    };
    const onPressRight = () => {
        setBtnSelect('left');
    };
    return (
        <View style={styles.btnWrap}>
            <TouchableOpacity style={{flex: 1}} onPress={onPressRight}>
                <GradientView style={styles.btn} direction={btnSelect === 'left' ? btnSelect : 'none'}>
                    <TextApp style={styles.btnText}>{left}</TextApp>
                </GradientView>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}} onPress={onPressLeft}>
                <GradientView style={styles.btn} direction={btnSelect === 'right' ? btnSelect : 'none'}>
                    <TextApp style={styles.btnText}>{right}</TextApp>
                </GradientView>
            </TouchableOpacity>
        </View>
    );
};



const styles = StyleSheet.create({
    btnWrap: {

        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 6,
        borderColor: Colors.D3,
        minHeight: 43
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: -3,
        borderColor: 'transparent',
        borderRadius: 6,
        borderWidth: 1,
    },
    btnText: {
        fontFamily: Fonts.medium,
    },

});
