import  React ,{ useEffect, useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../../Components/Header/Header';
import estilo from './estilo';
import api from '../../Api/api';
import CardPlantas from '../../Components/CardPlantas/CardPlantas';
import Load from '../../Components/Load';
import colors from '../../Styles/colors';

const Plants = ({navigation}) =>{

    const [ambiente, setAmbiente] = useState([]);
    const [planta, setPlanta] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [selectedAmbiente, setSelectedAmbiente] = useState('all')
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [more, setMore] = useState(false)

    var active = false;
    const selecionarAmbiente = (env) => {

        setSelectedAmbiente(env)
        if (env == 'all')
            return setFiltered(planta);

        const filteredPlants = planta.filter(plant =>
            plant.environments.includes(env)
        )
        setFiltered(filteredPlants)
    }

    useEffect(() => {
        const ambientes = async () => {
            const { data } = await api
                .get(`plants_environments?_sort=title&_order=asc`);
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

    const carregar = (distancia) => {
        if(distancia < 1)
            return;
        setMore(true);
        setPage(oldValue => oldValue + 1);
        plantas();
    }

    const plantas = async () => {
        const { data } = await api
            .get(`plants?_sort=name&_order=asc&_page=${page}&_limite=8`);
        if (!data)
            return setLoading(true);
        if (page > 1) {
            setPlanta(oldValue => [ ...oldValue, ...data])
            setFiltered(oldValue => [ ...oldValue, ...data])
        }else {
            setPlanta(data);
            setFiltered(data);
        }
        setLoading(false)
        setMore(false)
    }

    useEffect(() =>{
        plantas();
    }, []);
    
    if(loading)
        return <Load />
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
                    onEndReachedThreshold={0.1}
                    onEndReached={({distanceFromEnd})=> {carregar(distanceFromEnd)}}
                    ListFooterComponent={
                        carregar 
                        ?<ActivityIndicator color={colors.green}/>
                        :<></>
                    }
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <CardPlantas
                                navigation={navigation}
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