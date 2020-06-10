import React from 'react';
import {TextInput} from 'react-native';
import Colors from '../styles/Colors';
import Fonts from '../styles/Fonts';

export const Input = ({placeholder}) => {
    return (
        <TextInput
            selectionColor={'red'}
            style={{
                minHeight: 50,
                width: '100%',
                borderBottomColor: Colors.D3,
                fontFamily: Fonts.medium,
                borderBottomWidth: 1,
                fontSize: 15,
            }}
            placeholder={placeholder}
        />
    );
};
