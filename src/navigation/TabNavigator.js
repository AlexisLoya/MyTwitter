import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import InicioStack from '../navigation/InicioStack'
import Notificaciones from '../navigation/NotificacionesStack'
import MensajesStack from '../navigation/MensajesStack'


import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createMaterialBottomTabNavigator();

const  TabNavigator = ({navigation}) => {
  return (
    <Tab.Navigator
      initialRouteName="Inicio"
      activeColor="#00a2f3"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Inicio"
        component={InicioStack}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome
            name='home'
            size={26}
            color="rgb(136, 153, 166)" />
          ),
        }}
      />
      <Tab.Screen
                name="Notificaciones"
                component={Notificaciones}
                options={{
                  tabBarLabel: 'Notificaciones',
                  tabBarIcon: ({ color }) => (
                    <FontAwesome
                    name='bell'
                    size={26}
                    color="rgb(136, 153, 166)" />
                  ),
                }}
              />
              <Tab.Screen
                name="Mensajes"
                component={MensajesStack}
                options={{
                  tabBarLabel: 'Mensajes',
                  tabBarIcon: ({ color }) => (
                    <FontAwesome
                    name='envelope-open'
                    size={26}
                    color="rgb(136, 153, 166)" />
                  ),
                }}
              />
    </Tab.Navigator>
  );
}
export default TabNavigator