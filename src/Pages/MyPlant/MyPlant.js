import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    Modal
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import DataTimePicker, {Event} from '@react-native-community/datetimepicker';
import { RectButton } from 'react-native-gesture-handler';
import {format, isBefore} from 'date-fns'
import Icon from 'react-native-vector-icons/FontAwesome'
import Botao from '../../Components/Botao';
import estilo from './estilo';
import loadPlants, {savePlants} from '../../Storage/Storage';

const MyPlant = ({navigation, route}) => {
    const planta = route.params

    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showTime, setShowTime] = useState(Platform.OS == 'ios');
    const [open, setOpen] = useState(false);
    const [saveOpen, setSaveOpen] = useState(false);

    const mudarHorario = (event, date) => {
        if(Platform.OS == "android"){
            setShowTime(oldState => !oldState);
        }

        if(date && isBefore(date, new Date())){
            setSelectedTime(new Date());
            return setOpen(true)
        }
        if(date){
            setSelectedTime(date)
        }
    }

    const mudarParaAndroid = () => {
        setShowTime(oldState => !oldState);
    }

    const savePlant = async () =>{
        try{
            await savePlants({
                ...planta,
                dateTimeNotification: selectedTime
            })
        }catch{
            setSaveOpen(true)
            return <Modal
                visible={saveOpen}
                animationType='slide'
                transparent={true}
            >
                <View style={estilo.containerModal}>
                    <View style={estilo.contentModal}>
                        <Text style={estilo.textModal}>
                            Não foi possivel salvar sua planta{'\n'} tente novamente
                            </Text>
                        <View style={estilo.divModal}></View>
                        <TouchableOpacity
                            style={estilo.botaoModal}
                            onPress={() => setSaveOpen(false)}
                        >
                            <Icon name='close' size={40} color='white' />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        }
    }

    const info = {
        titulo: 'Beleza!',
        subTitulo: 'Agora e com a gente! Vamos nos esforçar para cuidar das suas plantinhas',
        buttonTitulo: 'Muito Obrigado',
        icon: '😜',
        nextScreen: 'PlantsSave',
    }

    return(
        <View style={estilo.container}>
            <View style={estilo.infoPlanta}>
                <SvgFromUri
                    uri={planta.photo}
                    width={150}
                    height={150}
                />
                <Text style={estilo.nomePlanta}>{planta.name}</Text>
                <Text style={estilo.sobrePlanta}>{planta.about}</Text>
            </View>
            {
                open == true &&
                <Modal
                    visible={open}
                    animationType='slide'
                    transparent={true}
                >
                    <View style={estilo.containerModal}>
                        <View style={estilo.contentModal}>
                            <Text style={estilo.textModal}>
                                Hey, esse horário já passou ⌚{'\n'}
                                Escolha um horário no futuro
                            </Text>
                            <View style={estilo.divModal}></View>
                            <TouchableOpacity
                                style={estilo.botaoModal}
                                onPress={() => setOpen(false)}
                            >
                                <Icon name='close' size={40} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            }
            <View style={estilo.controllers}>
                <View style={estilo.dica}>
                    <Image
                        style={estilo.imgDica}
                        source={require('../../../assets/waterdrop.png')}
                    />
                    <Text style={estilo.textDica}>{planta.water_tips}</Text>
                </View>
                <Text style={estilo.alertHorario}>Escolha um Horário par ser lembrado</Text>
                <Text style={estilo.alertHorario}>{`Horário salvo atual: ${format(selectedTime, 'HH:mm')}`}</Text>
                {
                    showTime && (
                        <DataTimePicker
                            value={selectedTime}
                            mode="time"
                            display="spinner"
                            onChange={mudarHorario}
                        />
                    )
                }
                {
                    Platform.OS == 'android' && (
                        <RectButton 
                            style={estilo.botaoTime}
                            onPress={mudarParaAndroid}
                        >
                            <Text style={estilo.textBotaoTime}>Mudar Horário Atual</Text>
                        </RectButton>
                    )
                }
                <Botao
                    navigation={navigation} 
                    routeName='Confirmation'
                    title='Muito Obrigado'
                    open={()=> savePlant(planta)}
                    info={info}
                />
            </View>
        </View>
    );
}

export default MyPlant;