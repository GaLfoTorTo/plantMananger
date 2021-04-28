import  React ,{ useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    FlatList,
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Header from '../../Components/Header/Header';
import estilo from './estilo';
import api from '../../Api/api';
import CardPlantas from '../../Components/CardPlantas/CardPlantas';

const Plants = ({navigation}) =>{

    const [ambiente, setAmbiente] = useState([]);
    const [planta, setPlanta] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedAmbiente, setSelectedAmbiente] = useState('all')

    var active = false;

    useEffect(() => {
        const ambientes = async () => {
            const { data } = await api.get('plants_environments?_sort=title&_order=asc');
            setAmbiente([
                {
                    key: 'all',
                    title: 'Todos',
                },
                ...data
            ]);
        }
        ambientes();
    }, []);

    useEffect(() => {
        const plantas = async () => {
            const { data } = await api.get('plants?_sort=name&_order=asc');
            setPlanta(data);
        }
        plantas();
    }, []);

    const selecionarAmbiente = (env) => {

        setSelectedAmbiente(env)
        if (env == 'all')
            return setFiltered(planta);

        const filteredPlants = planta.filter(planta =>
            planta.environments.includes(env)
        )
        setFiltered(filteredPlants)
    }

    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.content}>
                <Header
                />
                <Text style={estilo.titulo}>Em qual ambiente</Text>
                <Text style={estilo.subTitle}>você gostaria de colocar sua planta?</Text>
            </View>
            <View>
                <FlatList
                    data={ambiente}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={estilo.comodoLista}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        active= item.key == selectedAmbiente
                        return (
                            <RectButton
                                style={[estilo.card, active && estilo.cardActive]}
                                onPress={() => selecionarAmbiente(item.key)}
                            >
                                <Text style={[estilo.textCard, active && estilo.textActive]}>{item.title}</Text>
                            </RectButton>
                        );
                    }}
                />
            </View>

            <View 
                style={estilo.plantas}
                showsVerticalScrollIndicator={false}
            >
                <FlatList
                    data={filtered}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <CardPlantas
                                data={item}
                            />
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default Plants;