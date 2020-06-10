import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientView = ({children, style, direction},) => {
    let start;
    let end;
    switch (direction) {
        case 'right':
            start = {x: 0, y: 1};
            end = {x: 1, y: 0};
            break;
        case 'left':
            start = {x: 1, y: 0};
            end = {x: 0, y: 1};
            break;
        case 'none':
            return <View style={style}>{children}</View>
    }

    return(
        <LinearGradient
            style={style}
            colors={['#C9F5EF', '#EAE9D5']}
            locations={[0.43, 0.93]}
            start={start}
            end={end}
        >
            {children}
        </LinearGradient>
    )
};
