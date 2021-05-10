import {StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    card:{
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 25,
        borderRadius: 20,
        flexDirection: 'row',
        backgroundColor: colors.shape,
        alignItems: 'center',
        
    },
    titleCard:{
        flex:1,
        marginLeft: 10,
        fontFamily: fonts.heading,
        color: colors.heading,
        fontSize: 17
    },
    detalhes: {
        alignItems: 'center'
    },
    time:{
        fontSize: 16,
        fontFamily: fonts.text,
        color: colors.body_light
    },
    textTime: {
        marginTop:5,
        fontSize: 17,
        fontFamily: fonts.heading,
        color: colors.body_dark
    }
});

export default estilo;