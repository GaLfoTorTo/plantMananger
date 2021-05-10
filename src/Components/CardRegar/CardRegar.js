import React from 'react';
import {Text, View} from 'react-native';
import { SvgFromUri} from 'react-native-svg';
import {RectButton} from 'react-native-gesture-handler';
import estilo from './estilo';

const CardRegar = ({navigation, data}) => {
    
    return(
        <RectButton 
            style={estilo.card}
            onPress={() => navigation.navigate('MyPlant', data)}
        >
            <SvgFromUri
                uri={data.photo}
                width={50}
                height={70}
            />
            <Text style={estilo.titleCard}>{data.name}</Text>
            <View style={estilo.detalhes}>
                <Text style={estilo.textTime}>Regar às: </Text>
                <Text style={estilo.time}>{data.hour}</Text>
            </View>
        </RectButton>
    );
}

export default CardRegar;