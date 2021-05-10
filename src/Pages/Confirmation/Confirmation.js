import React, { useState } from 'react';
import { SafeAreaView, View, Text} from 'react-native';
import Botao from '../../Components/Botao'
import estilo from './estilo';

const Confirmation = ({ navigation, route}) => {

    const info = route.params.infoPage
    
    return(
        <SafeAreaView style={estilo.container}>
            <Text style={estilo.emoji}>{info.icon}</Text>
            <Text style={estilo.titulo}>{info.titulo}</Text>
            <Text style={estilo.subTitulo}>{info.subTitulo}</Text>
            <Botao
                navigation={navigation}
                title={info.buttonTitulo}
                routeName={info.nextScreen}
                open={()=> {}}
                info=''
            />
        </SafeAreaView>
    );
}

export default Confirmation;