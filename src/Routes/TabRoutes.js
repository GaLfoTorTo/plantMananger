import React from 'react';
import {createTabNavigator} from '@react-navigation/bottom-tabs'
import colors from '../Styles/colors';
import Plants from '../Pages/Plants/Plants'
import PlantsSave from '../Pages/Plants/Plants'
import  Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createTabNavigator()

const TabRoutes = () => {
    return(
        <TabRoutes.navigator
            tabBarOptions={{
                activeTintColor: colors.green,
                inativeTintColor: colors.heading,
                lablePosition: 'beside-icon',
                style:{
                    paddingVertical: 20,
                    height: 88
                }
            }}
        >
            <TabRoutes.Screen
                name={'Nova Planta'}
                component={Plants}
                options={{
                    tabBarIcon: (({size, color}) =>(
                        <Icon
                            name='cicle-notch'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <TabRoutes.Screen
                name={'Minhas Plantas'}
                component={PlantsSave}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Icon
                            name='th-list'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </TabRoutes.navigator>
    )
}

export default TabRoutes;