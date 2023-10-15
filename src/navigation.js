import { View, Text, Platform, SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation, DefaultTheme } from '@react-navigation/native';
import { TransitionSpecs } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';

import Page2 from './screens/home/sugar/page2';
import find_device from './screens/bluetooth/find_device';

// Register Screen
import Register from './screens/signup/register/register';
import Question from './screens/signup/register/question';
import Login from './screens/signup/login/login';
import Welcome from './welcome';

import Information from './screens/signup/register/information';
import Passwordregister from './screens/signup/register/passwordregis';
import Policyregister from './screens/signup/register/policyregister';
import DeviceList from './screens/bluetooth/deviceList';

import EditProflie from './screens/account/editproflie';



import Personaldata_page1 from './screens/signup/personaldata_page/personaldata_page1';
import Personaldata_page2 from './screens/signup/personaldata_page/personaldata_page2';



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
        <Stack.Screen name='Welcome' component={Welcome}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Question' component={Question} />
        <Stack.Screen name='Passwordregister' component={Passwordregister} />
        <Stack.Screen name='Policyregister' component={Policyregister} />
        <Stack.Screen name='Information' component={Information} />
        <Stack.Screen name='EditProflie' component={EditProflie} />
        <Stack.Screen name='DeviceList' component={DeviceList} />
        <Stack.Screen name='Personaldata_page1' component={Personaldata_page1} />
        <Stack.Screen name='Personaldata_page2' component={Personaldata_page2} />
        {/* <Stack.Screen name='Page2' component={Page2} /> */}
        <Stack.Screen name='Tabs' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;