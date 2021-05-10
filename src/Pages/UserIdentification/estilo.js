import {StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 35
    },
    content:{
        alignItems: 'center',
        width: '100%'
    },
    emoji: {
        fontSize: 40,
        marginBottom: 40
    },
    titulo:{
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 19,
        marginBottom:40
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        padding: 5,
        textAlign: 'center',
        marginBottom: 40
    },
    focusedInput:{
        borderColor: colors.green
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'transparent',
    },
    modalContent: {
        backgroundColor: 'rgb(255, 30 ,30)',
        width: '82%',
        height: '50%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'rgb(200, 70, 70)',
        alignItems: 'center',
        justifyContent: 'space-evenly',

    },
    cardTextModal:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        height: '80%',
        paddingHorizontal: 10
    },
    emojiModal:{
        fontSize: 50,
        textAlign: 'center',

    },
    textModal: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    },
    div:{
        width:'100%',
        height: 1,
        backgroundColor: 'white',
    },
    botaoIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '12%',
        borderRadius: 20
    },
    icon:{
        color: 'white',
    }

});

export default estilo;