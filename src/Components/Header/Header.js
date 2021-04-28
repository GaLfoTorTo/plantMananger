import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import estilo from './estilo'

const Header = () => {
    return (
        <View style={estilo.container}>
            <View >
                <Text style={estilo.titulo}>Olá</Text>
                <Text style={estilo.name}>Leonardo</Text>
            </View>
            <Image
                style={estilo.image}
            />
        </View>
    );
}

export default Header;