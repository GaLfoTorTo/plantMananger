import React from "react";
import {StyleSheet, Dimensions} from "react-native";
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        fontFamily: fonts.heading,
        color: colors.heading,
        textAlign: 'center',
        position: 'relative',
        top: 30
    },
    imagem: {
        height: medidas,
    },
    subTitulo: {
        textAlign: 'center',
        lineHeight: 20,
        fontSize: 15,
        color: colors.heading,
        fontFamily: fonts.text,
    },
    botao: {
        width: 56,
        height: 56,
        borderRadius: 16,
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icone: {
        color: colors.white,
    }
});

export default estilo;