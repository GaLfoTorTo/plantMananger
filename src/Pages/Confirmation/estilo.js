import {StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 15
    },
    emoji:{
        fontSize: 80,
        marginBottom: 20
    },
    titulo: {
        fontFamily: fonts.heading,
        fontSize: 30,
        textAlign: 'center',
        color: colors.heading,
        marginVertical: 20
    },
    subTitulo:{
        fontFamily: fonts.text,
        fontSize: 17,
        textAlign: 'center',
        color: colors.heading,
        marginVertical: 30
    }
})

export default estilo;