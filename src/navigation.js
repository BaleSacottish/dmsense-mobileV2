import { View, Text, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation, DefaultTheme } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

import Page2 from './screens/home/sugar/page2';
import find_device from './screens/bluetooth/find_device';

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
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          presentation: 'modal',
          transitionSpec: {
            open: TransitionSpecs.BottomSheetSlideInSpec,
            close: TransitionSpecs.BottomSheetSlideOutSpec,
          }
        }}>



        <Stack.Screen name='Tabs' component={Tabs} />
        {/* <Stack.Screen name='Page2' component={Page2} /> */}
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;