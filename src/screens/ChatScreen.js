import React from 'react';
import {View} from 'react-native';
import {TextApp} from '../components/ui/Text';

export const ChatScreen = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TextApp style={{fontSize: 40}}> ЧАТ</TextApp>
        </View>

    )
};
