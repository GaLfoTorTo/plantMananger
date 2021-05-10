import React ,{useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    View,
    Text,
    Image,
} from 'react-native';
import estilo from './estilo'

const Header = () => {

    const [userName, setUserName] = useState();

    useEffect(()=>{
        const loadName = async () => {
            const user = await AsyncStorage.getItem('@plantManager:user');
            setUserName(user || 'Alguem');
        }
        loadName()
    },[])
    return (
        <View style={estilo.container}>
            <View >
                <Text style={estilo.titulo}>Olá</Text>
                <Text style={estilo.name}>{userName}</Text>
            </View>
            <Image
                source={require('../../../assets/user-default.png')}
                style={estilo.imagem}
            />
        </View>
    );
}

export default Header;