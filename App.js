import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import  TabNavigator  from './src/navigation/TabNavigator'
import { DrawerContent } from './src/navigation/DrawerContent'
import  Perfil  from './src/screens/Perfil'

const Drawer = createDrawerNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props =><DrawerContent{... props}/>}>
        <Drawer.Screen name="Inicio" component={TabNavigator}/>
         <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
