import React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import colors from '../Styles/colors';
import Plants from '../Pages/Plants/Plants'
import PlantsSave from '../Pages/PlantsSave/PlantsSave'
import  Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator()

const TabRoutes = () => {
    return(
        <Tab.Navigator
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
            <Tab.Screen
                name={'Nova Planta'}
                component={Plants}
                options={{
                    tabBarIcon: (({size, color}) =>(
                        <Icon
                            name='leaf'
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Tab.Screen
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
        </Tab.Navigator>
    )
}

export default TabRoutes;