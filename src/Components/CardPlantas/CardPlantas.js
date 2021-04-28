import React from 'react';
import {Text} from 'react-native';
import { SvgFromUri} from 'react-native-svg'
import {RectButton} from 'react-native-gesture-handler';
import estilo from './estilo';

const CardPlantas = ({data}) => {
    return(
        <RectButton style={estilo.card}>
            <SvgFromUri
                uri={data.photo}
                width={120}
                height={180}
            />
            <Text style={estilo.textoCard}>{data.name}</Text>
        </RectButton>
    );
}

export default CardPlantas;