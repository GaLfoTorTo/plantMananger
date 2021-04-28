import {StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    card:{
        flex: 1,
        maxWidth: '45%',
        backgroundColor: colors.shape,
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10
    },
    textoCard:{
        fontFamily: fonts.heading,
        color: colors.green_dark,
        marginVertical: 16
    }
});

export default estilo;