import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';


const medidas = Dimensions.get('screen').width;

const estilo = StyleSheet.create({
    card: {
        backgroundColor: colors.shape,
        borderRadius: 12,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    cardActive:{
        backgroundColor: colors.green_light
    },  
    textCard: {
        color: colors.heading,
        fontFamily: fonts.text,
    },
    textActive:{
        fontFamily: fonts.heading,
        color: colors.green_dark
    }
});

export default estilo;