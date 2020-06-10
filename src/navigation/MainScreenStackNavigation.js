import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MainScreen} from '../screens/MainScreen';
import {Header} from '../components/header/Header';
import {BodyNutritionScreen} from '../screens/body-nutrition/BodyNutritionScreen';


const Stack = createStackNavigator();

export const MainScreenStackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    header: () => <Header headerTop/>,
                }}
                name="MainScreen"
                component={MainScreen}/>
                <Stack.Screen
                    name='BodyNutritionStackScreen'
                    component={BodyNutritionScreenStack}
                    options={{
                        animationEnabled: false,
                        header: () => <Header buttons headerTitle headerTop/>,
                    }}
                />
        </Stack.Navigator>
    );
};


const BodyNutritionScreenStack = () => {
    return(
        <Stack.Navigator headerMode='none'>
            <Stack.Screen
                name="BodyNutritionScreen"
                component={BodyNutritionScreen}/>
        </Stack.Navigator>
    )
};
