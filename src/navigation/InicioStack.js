import Inicio from '../screens/Inicio'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Ionicons'
import { Azul } from '../utils/Color'

const Stack = createStackNavigator()

const InicioStack  = ({ navigation }) => {
  return(
    <Stack.Navigator >
    <Stack.Screen
    name="Home"
    component={Inicio}
    options={{
        headerTitleAlign:'center',
        headerTitle: () =>(
          <FontAwesome
          name='twitter'
          size={30}
          color={Azul}/>
        ),
        headerLeft: () =>(
          <Icon.Button
            name="ios-menu" size={30}
            color="#00a2f3"
            backgroundColor="#fff" onPress={() => {navigation.openDrawer()}}
          ></Icon.Button>
        ),
        headerRight: ()=> (
          <FontAwesome
                    style={styles.icon}
                    name='flash'
                    size={30}
                    color={Azul} />
        )

      }}
    />
  </Stack.Navigator>
    );
}

export default InicioStack;
const styles = StyleSheet.create({
  icon:{
    marginRight:10
  }
})