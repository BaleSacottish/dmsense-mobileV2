import { View, Text, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation, DefaultTheme } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

import Tabs from './tabs';
import colors from '../src/contants/colors';


const Stack = createStackNavigator()

const Theme = {
  ...DefaultTheme,
  colors: {
    background: colors.blue_transparent_7,
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={Theme}>
      <Stack.Navigator>

        
      
        <Stack.Screen name='Tabs' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;