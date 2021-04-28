import {StyleSheet, StatusBar} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    container:{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: StatusBar.currentHeight,
        marginBottom: 30
    },
    titulo:{
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 28  
    },
    name:{
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 20,
    },
    imagem: {
        width: 56,
        height: 56,
        borderRadius: 25
    }

});

export default estilo;
