import React, { useState } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import Botao from '../../Components/Botao'
import estilo from './estilo';

const Confirmation = ({navigation}) => {

    return(
        <SafeAreaView style={estilo.container}>
            <Text style={estilo.emoji}>😃</Text>
            <Text style={estilo.titulo}>Prontinho!</Text>
            <Text style={estilo.subTitulo}>Agora vamos começar a cuidar das suas plantinhas com muito cuidado</Text>
            <Botao
                navigation={navigation}
                title='Vamos lá'
                routeName='Plants'
            />
        </SafeAreaView>
    );
}

export default Confirmation;