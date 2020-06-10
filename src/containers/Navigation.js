import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import CustomIcon from '../components/styles/CustomIcon';
import Colors from '../components/styles/Colors';
import {ChatScreen} from '../screens/ChatScreen';
import {MarketScreen} from '../screens/MarketScreen';
import {SettingsScreen} from '../screens/SettingsScreen';
import Fonts from '../components/styles/Fonts';
import {MainScreenStackNavigation} from '../navigation/MainScreenStackNavigation';


const Tab = createBottomTabNavigator();

// TODO  сделать тень меню
const Navigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='MainScreen'
                tabBarOptions={{
                    activeTintColor: '#172038',
                    inactiveTintColor: '#939393',
                    style: {borderRadius: 10, height: 50},
                    labelStyle: {fontFamily: Fonts.medium, fontSize: 12},
                }}
            >
                <Tab.Screen
                    name='MainScreen'
                    component={MainScreenStackNavigation}
                    options={{
                        tabBarLabel: 'Главная',
                        tabBarIcon: ({color, size}) => (
                            <CustomIcon name="main" color={color} size={24}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name='ChatScreen'
                    component={ChatScreen}
                    options={{
                        tabBarLabel: 'Чат',
                        tabBarIcon: ({color, size}) => (
                            <CustomIcon name="chat" color={color} size={18}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name='MarketScreen'
                    component={MarketScreen}
                    options={{
                        tabBarLabel: 'Магазин',
                        tabBarIcon: ({color, size}) => (
                            <CustomIcon name="market" color={color} size={24}/>
                        ),
                    }}
                />
                <Tab.Screen
                    name='SettingsScreen'
                    component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Настройки',
                        tabBarIcon: ({color, size}) => (
                            <CustomIcon name="settings" color={color} size={24}/>
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;



