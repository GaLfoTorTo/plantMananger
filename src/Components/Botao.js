import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import colors from '../Styles/colors';
import fonts from '../Styles/fonts';

const Botao = ({navigation, title, routeName})=>{
    return(
        <TouchableOpacity 
            style={estilo.botao}
            onPress={() => navigation.navigate(routeName)}
        >
            <Text style={estilo.textoBotao}>{title}</Text>
        </TouchableOpacity>
    );
}

const estilo = StyleSheet.create({
botao: {
    width: '100%',
    height: 50,
    borderRadius: 15,
    backgroundColor: colors.green,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
},
textoBotao:{
    textAlign: 'center',
    fontSize: 15,
    color: colors.white,
    fontFamily: fonts.text,
    fontWeight: 'bold'
}
});

export default Botao;