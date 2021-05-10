import AsyncStorage from '@react-native-async-storage/async-storage';
import {format} from 'date-fns';

const plantProps = {
    id: String,
    name: String,
    about: String,
    water_tips: String,
    photo: String,
    environments: String,
    frequency:{
        times: Number,
        repeate_every: String
    },
    dateTimeNotification: Date
}

export async function savePlants(plant={id, data}){
    try {
        const data = await AsyncStorage.getItem('@plantManager:plants');
        const oldPlant = data ? (JSON.parse(data)) : {};
        const newPlant = {
            [plant.id]: {
                data: plant
            }
        }
        await AsyncStorage.setItem('@plantManager:plants',
        JSON.stringify({
            ...newPlant,
            ...oldPlant
        }));
    }catch(e){
        throw new Error(e)
    }
}

const loadPlants = async () => {
    try {
        const data = await AsyncStorage.getItem('@plantManager:plants');
        const plants = data ? (JSON.parse(data)) : {};
        
        const plantSorted = Object
            .keys(plants)
            .map((plant) => {
                return {
                    ...plants[plant].data,
                    hour: format(new Date(plants[plant].data.dateTimeNotification), "HH:mm")
                }
            })
            .sort((a,b) =>
                Math.floor(
                    new Date(a.dateTimeNotification).getTime() / 1000 -
                    Math.floor(new Date(b.dateTimeNotification).getTime() / 1000)
                )
            );

            return plantSorted
    } catch (e) {
        throw new Error(e)
    }
}

export default loadPlants;