import React from 'react';
import {TouchableOpacity} from 'react-native';

import {GradientView} from './ui/GradientView';


export const OAuth = ({children}) => {
    return (
        <TouchableOpacity>
        <GradientView style={{width: 60, height: 60, borderRadius: 50, marginRight: 10, marginTop: 10, justifyContent: 'center', alignItems:'center'}}>
            {children}
        </GradientView>
        </TouchableOpacity>
    );
};
