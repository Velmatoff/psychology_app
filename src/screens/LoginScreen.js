import {View, StyleSheet, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SecondaryButtons} from '../components/ui/SecondaryButtons';
import Style from '../components/styles/Styles';
import {TextApp} from '../components/ui/Text';
import Fonts from '../components/styles/Fonts';
import Colors from '../components/styles/Colors';
import {PrimaryButton} from '../components/ui/PrimaryButton';
import {OAuth} from '../components/OAuth';
import {Input} from '../components/ui/Input';
import CustomIcon from '../components/styles/CustomIcon';


export const LoginScreen = () => {

    const [btnSelect, setBtnSelect] = useState('left');

    return (
        <View style={Style.container}>
            <View style={styles.header}>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                    <TextApp style={styles.title}>Добро пожаловать в</TextApp>
                    <TextApp style={styles.subTitle}>Psychology App</TextApp>
                </View>
                <View style={{flex: 1}}>
                    <SecondaryButtons left={'Вход'} right={'Регистрация'} setBtnSelect={setBtnSelect} btnSelect={btnSelect}/>
                </View>
            </View>

            {btnSelect === 'left' ? <Login/> : <Reg/>}

            <View style={styles.footer}>
                <TextApp style={{color: Colors.blackText, fontFamily: Fonts.medium, fontSize: 12}}>Войти при помощи
                    социальных сетей:</TextApp>
                <View style={{flexDirection: 'row'}}>
                    <OAuth>
                        <CustomIcon name={'vk'} size={24} color={Colors.gray}/>
                    </OAuth>
                    <OAuth>
                        <CustomIcon name={'google'} size={32} color={Colors.gray}/>
                    </OAuth>
                </View>
            </View>
        </View>
    );
};
const Login = () =>{
    return(
        <View style={styles.heart}>
            <View style={{flex: 8, alignItems: 'center'}}>
                <Image style={{flex: 1, maxHeight: 190, maxWidth: 209}} source={require('../assets/LoginIcon.png')}/>
                <Input placeholder={'Логин'}/>
                <Input placeholder={'Пароль'}/>
                <TextApp style={{alignSelf: 'flex-start',fontFamily: Fonts.medium, fontSize: 12, paddingTop: 10}}>Забыли пароль?</TextApp>
            </View>
            <View style={{flex: 1}}>
                <PrimaryButton title={'Войти'}/>
            </View>
        </View>
    )
};

const Reg = () => {
    return(
        <View style={styles.heart}>
            <View style={{flex: 8, alignItems: 'center'}}>
                <Input placeholder={'Логин'}/>
                <Input placeholder={'ФИО'}/>
                <Input placeholder={'E-mail'}/>
                <Input placeholder={'Пароль'}/>
            </View>
            <View style={{flex: 1}}>
                <PrimaryButton title={'Регистрация'}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        flex: 0.234,
    },
    heart: {
        flex: 0.565,
        paddingTop: 15,
    },
    footer: {
        flex: 0.2,
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        fontFamily: Fonts.medium,
        color: Colors.gray,

    },
    subTitle: {
        fontSize: 24,
        fontFamily: Fonts.bold,
        color: Colors.black,

    },
});
