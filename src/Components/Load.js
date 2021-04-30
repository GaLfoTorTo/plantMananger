import React from 'react';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import load from '../../assets/plant.json';

const Load = () =>{
    return(
        <View style={estilo.container}>
            <LottieView 
                source={load}
                autoPlay
                loop
                style={estilo.load}
            />
        </View>
    );
}

const estilo = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    load:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        width: '70%',
        height: '70%'
    }
})

export default Load;