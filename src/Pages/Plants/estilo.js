import {StyleSheet} from 'react-native'
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    content:{
        margin: 15,
    },
    comodoLista:{
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    titulo:{
        fontSize: 17,
        color: colors.heading,
        fontFamily: fonts.heading,
    },
    subTitle:{
        fontSize: 17,
        fontFamily: fonts.text,
        color: colors.heading
    },
    card: {
        backgroundColor: colors.shape,
        borderRadius: 12,
        width: 76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    cardActive: {
        backgroundColor: colors.green_light
    },
    textCard: {
        color: colors.heading,
        fontFamily: fonts.text,
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark
    }
})

export default estilo;