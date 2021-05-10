import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './src/Pages/Welcome/Welcome';
import UserIdentification from './src/Pages/UserIdentification/UserIdentification';
import Confirmation from './src/Pages/Confirmation/Confirmation';
import MyPlant from './src/Pages/MyPlant/MyPlant'
import TabRoutes from './src/Routes/TabRoutes';

const Stack = createStackNavigator();

const StackRoutes = () => {
    return(
        <Stack.Navigator
            headerMode='none'
        >
            <Stack.Screen
                name='Welcome'
                component={Welcome}
            />
            <Stack.Screen
                name='UserIdentification'
                component={UserIdentification}
            />
            <Stack.Screen
                name='Confirmation'
                component={Confirmation}
            />
            <Stack.Screen
                name='Plants'
                component={TabRoutes}
            />
            <Stack.Screen
                name='MyPlant'
                component={MyPlant}
            />
            <Stack.Screen
                name='PlantsSave'
                component={TabRoutes}
            />
        </Stack.Navigator>
    )
}

export default StackRoutes;