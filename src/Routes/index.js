import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from './src/Routes/StackRoutes';

const Routes = () =>{
    return(
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    );
}

export default Routes;