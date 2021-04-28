import React from 'react';
import {Text} from 'react-native';
import { RectButton, RectButtonProps} from 'react-native-gesture-handler';
import estilo from './estilo';

const CardComodo = ({ title, active = false, funcao, env}) => {
    return(
        <RectButton
            style={[estilo.card, active && estilo.cardActive]}
            //onPress={() => this.funcao(env)}
        >
            <Text style={[estilo.textCard, active && estilo.textActive]}>{title}</Text>
        </RectButton>
    );
}

export default CardComodo;