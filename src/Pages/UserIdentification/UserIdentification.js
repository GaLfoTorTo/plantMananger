import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Modal,
    TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "react-native-vector-icons/FontAwesome";
import Botao from '../../Components/Botao';
import estilo from './estilo';

const UserIdentification = ({navigation}) => {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState();
    const [open, setOpen] = useState(false);
    
    const handleBlur = () =>{
        setIsFocused(false)
        setIsFilled(!!name);
    }
    const handleFocus = () => {
        setIsFocused(true)
    }
    const handelChange = (value) => {
        setIsFilled(!!value);
        setName(value)
    }

    const storage = async (nome) =>{
        try{
            await AsyncStorage.setItem('@plantManager:user', nome);
        }catch{
            return <Modal
                visible={open}
                animationType='slide'
                transparent={true}
            >
                <SafeAreaView style={estilo.modal}>
                    <View style={estilo.modalContent}>
                        <View style={estilo.cardTextModal}>
                            <Text style={estilo.emojiModal}>😕</Text>
                            <Text style={estilo.textModal}>
                                Ops...{'\n'}
                                Houve um erro tentar ao salvar{'\n'}
                                seu nome
                            </Text>
                        </View>
                        <View style={estilo.div}></View>
                        <TouchableOpacity
                            style={estilo.botaoIcon}
                            onPress={() => setOpen(false)}
                        >
                            <Icon name='close' size={40} style={estilo.icon} />
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </Modal>
        }
    }

    const saveName = (nome) => {
        if (!nome) {
            setOpen(true)
            return true
        }
        storage(nome)
    }

    const info = {
        titulo: 'Prontinho!',
        subTitulo: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado',
        buttonTitulo: 'Vamos Lá',
        icon: '😃',
        nextScreen: 'Plants',
    }
    
    return(
        <SafeAreaView style={estilo.container}>
            <KeyboardAvoidingView
                style={estilo.content}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
            >
                <View style={estilo.content}>
                    <Text style={estilo.emoji}>{isFilled ? '😉' : '😅'}</Text>
                    <Text style={estilo.titulo}>OK, estamos quase lá...{'\n'}como podemos te chamar?</Text>
                    <TextInput 
                        style={[estilo.input, (isFocused || isFilled) && estilo.focusedInput]}
                        placeholder='Digite seu nome...'
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                        onChangeText={handelChange}
                    ></TextInput>
                </View>
                {open == true &&
                    <Modal 
                        visible={open}
                        animationType='slide'
                        transparent={true}
                    >
                        <SafeAreaView style={estilo.modal}>
                            <View style={estilo.modalContent}>
                                <View style={estilo.cardTextModal}>
                                    <Text style={estilo.emojiModal}>😕</Text>
                                    <Text style={estilo.textModal}>
                                        Ué...{'\n'}
                                        Você não tem nome?{'\n'} Informar seu nome
                                        para podermos continuar
                                    </Text>
                                </View>
                                <View style={estilo.div}></View>
                                <TouchableOpacity 
                                    style={estilo.botaoIcon}
                                    onPress={() => setOpen(false)}
                                >
                                    <Icon name='close' size={40} style={estilo.icon} />
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </Modal>
                }
                <Botao 
                    navigation={navigation}
                    title='Confirmar'
                    routeName='Confirmation'
                    open={() => saveName(name)}
                    info={info}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default UserIdentification;