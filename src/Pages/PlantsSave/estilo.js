import {StyleSheet} from 'react-native';
import colors from '../../Styles/colors';
import fonts from '../../Styles/fonts';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20
    },
    imageSpotLight:{
        width: 60,
        height: 60,
    },
    textSpotLight: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        textAlign: 'justify'
    },
    plants: {
        flex: 1,
        width: '100%'
    },
    titlePlants: {
        fontSize: 20,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginVertical: 20
    },
    listaRegadas:{
        marginVertical: 5
    }
});

export default estilo;