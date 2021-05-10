import React, { useEffect, useState } from 'react' ;
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import Header from '../../Components/Header/Header';
import estilo from './estilo';
import CardRegar from '../../Components/CardRegar/CardRegar';
import loadPlants, { savePlants } from '../../Storage/Storage';

const PlantsSave = ({navigation}) => {

    const [myPlants, setMyPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextRegar, setNextRegar] = useState([]);

    useEffect(() =>{
        const loadStorageData = async () => {
            const plantStoraged = await loadPlants();

            const nextTime = formatDistance(
                new Date(plantStoraged[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                {locale: pt}
            );

            setNextRegar(
                `Não esqueça de regar a ${plantStoraged[0].name} daqui ${nextTime}.`
            )
            setMyPlants(plantStoraged);
            setLoading(false);
        }

        loadStorageData()
    })


    return (
        <SafeAreaView style={estilo.container}>
            <Header />
            <View style={estilo.content}>
                <Image
                    source={require('../../../assets/waterdrop.png')}
                    style={estilo.imageSpotLight}
                />
                <Text style={estilo.textSpotLight}>{nextRegar}</Text>
            </View>
            <View style={estilo.plants}>
                <Text style={estilo.titlePlants}>Próximas regadas:</Text>
                <FlatList 
                    data={myPlants}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(index, item) => index.toString()}
                    renderItem={({item, index }) => {
                        return (
                            <View style={estilo.listaRegadas}>
                                <CardRegar
                                    data={item}
                                />
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default PlantsSave;