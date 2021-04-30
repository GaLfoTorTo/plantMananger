import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Modal,
} from 'react-native';
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
                {open == true ??
                    <Modal visible={open}>
                        <View style={estilo.modal}>
                            <Text style={estilo.textModal}>teste</Text>
                        </View>
                    </Modal>
                }
                <Botao 
                    navigation={navigation}
                    title='Confirmar'
                    routeName='Confirmation'
                    nome={name}
                />
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}
export default UserIdentification;