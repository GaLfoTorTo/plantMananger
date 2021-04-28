import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from '@react-navigation/stack';
import { useFonts, Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import Welcome from './src/Pages/Welcome/Welcome';
import UserIdentification from './src/Pages/UserIdentification/UserIdentification';
import Confirmation from './src/Pages/Confirmation/Confirmation';
import Plants from './src/Pages/Plants/Plants'

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
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
          component={Plants}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}