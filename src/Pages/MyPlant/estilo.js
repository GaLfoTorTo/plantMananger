import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.shape,
    },
    infoPlanta: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    controllers: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 40,
        paddingBottom: getBottomSpace() || 20
    },
    nomePlanta:{
        fontFamily: fonts.heading,
        fontSize: 25,
        color: colors.heading,
        marginTop: 15
    },
    sobrePlanta: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10
    },
    dica: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 15,
        position: 'relative',
        bottom: 50
    },
    imgDica:{
        width: 56,
        height: 56,
    },
    textDica:{
        marginLeft:20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify',
    },
    alertHorario:{
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5
    },
    botaoTime:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
        height: '20%',
        borderRadius: 15,
        backgroundColor: colors.red,
        marginBottom: 20
    },
    textBotaoTime:{
        textAlign: 'center',
        fontSize: 20,
        fontFamily: fonts.heading,
        color: colors.white
    },
    containerModal:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentModal:{
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgb(255, 30 ,30)',
        width: '90%',
        height: '30%',
        borderRadius: 18,
        borderWidth: 1,
        borderColor: 'rgb(200, 70, 70)',
        padding: 10
    },
    textModal: {
        fontSize: 20,
        fontFamily: fonts.complement,
        color: colors.white,
        textAlign: 'center'
    },
    divModal:{
        backgroundColor: 'white',
        height: 1,
        width: '100%'
    },
    botaoModal:{
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        
    }

})

export default estilo;