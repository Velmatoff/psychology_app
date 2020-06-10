import {View} from 'react-native';
import React, {useState} from 'react';
import Colors from '../styles/Colors';
import {TextApp} from '../ui/Text';
import Fonts from '../styles/Fonts';
import CustomIcon from '../styles/CustomIcon';
import Styles from '../styles/Styles';
import {SecondaryButtons} from '../ui/SecondaryButtons';

export const Header = ({buttons, headerTitle, headerTop}) => {
    const [btnSelect,setBtnSelect] = useState('left');
    return (
        <View style={{
            backgroundColor: Colors.white,
        }}>
            <View>
                {headerTop && <View style={{height: 44, flexDirection: 'row', marginTop: 20,borderBottomWidth: 1,
                    borderBottomColor: Colors.liteGray,}}>
                    <View style={{
                        flex: 3,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 15,
                        paddingLeft: 15,

                    }}>
                        <CustomIcon name={'calendar'} size={22}/>
                        <TextApp style={{fontSize: 15, fontFamily: Fonts.medium, color: Colors.blackText}}>25.02.2020 |
                            Понедельник</TextApp>
                    </View>
                    <View style={{
                        flex: 1,
                        backgroundColor: Colors.liteGray,
                        borderTopLeftRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 15,
                        paddingLeft: 15,
                    }}>
                        <CustomIcon name={'purse'} size={28}/>
                        <TextApp style={{fontSize: 15, fontFamily: Fonts.medium, color: Colors.blackText}}>12
                            500</TextApp>
                    </View>
                </View>}
                {headerTitle && <View style={{
                    flexDirection: 'row',
                    height: 44,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <TextApp
                        style={{
                            fontFamily: Fonts.medium,
                            fontSize: 17,
                            color: Colors.black
                        }}>
                        Питание тела
                    </TextApp>
                </View>}
                {buttons && <View style={{height: 44}}>
                    <SecondaryButtons left='Приём пищи' right='Статистика' btnSelect={btnSelect} setBtnSelect={setBtnSelect}/>
                </View>}

            </View>
        </View>
    );
};
