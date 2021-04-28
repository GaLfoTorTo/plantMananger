import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import estilo from './estilo';

const Welcome = ({navigation})=> {
    return(
        <SafeAreaView style={estilo.container}>
            <Text style={estilo.titulo}>Gerencie {'\n'}suas plantinhas de{'\n'}forma fácil</Text>
            <Image
                source={require('../../../assets/watering.png')}
                style={estilo.imagem}
                resizeMode='contain'
            />
            <Text style={estilo.subTitulo}>Não esqueça mais de regar suas{'\n'}suas plantas. Nós cuidamos de lembrar você{'\n'}sempre que precisar</Text>
            <TouchableOpacity
                style={estilo.botao}
                Opacity={0.8}
                onPress={()=> navigation.replace('UserIdentification')}
            >
                <Icon name='chevron-right' size={13} style={estilo.icone}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Welcome;