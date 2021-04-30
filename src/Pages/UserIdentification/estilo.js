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
        justifyContent: 'center',
        width: '80%',
        height: '60%',
        backgroundColor: 'rgb(255, 245, 245)'
    },
    textModal: {
        color: 'white'
    }

});

export default estilo;