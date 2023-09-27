import { View, TouchableOpacity, Text, Animated, StyleSheet } from 'react-native'
import React, { useState } from 'react'

import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../src/contants/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useTheme } from 'react-native-paper';
import { fontFamily } from './contants/fonts';

import Account from './screens/home/account';
import Home from './screens/home/home';
import ketone from './screens/home/ketone';
import sugar from './screens/home/sugar';

import Loadedbuletooth from './components/loadedbuletooth';

import Page1 from './screens/home/sugar/page1';
import Page2 from './screens/home/sugar/page2';
import Page3 from './screens/home/sugar/page3';
import find_device from './screens/bluetooth/find_device';

import Kpage1 from './screens/home/ketone/kpage1';
import Kpage2 from './screens/home/ketone/kpage2';
import Kpage3 from './screens/home/ketone/kpage3';


const Tab = createBottomTabNavigator();
const Sugartab = createStackNavigator();
const Ketonetab = createStackNavigator();

const colours = ['#fff', 'red']
const getColour = () => [Math.floor(Math.random() * colors.length)];



/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

const Tabs = ({ navigation, route }) => {
  return (
    <Tab.Navigator
    
      screenOptions={{
        tabBarInactiveBackgroundColor: "#1631C2",
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#1631C2",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1631C2',
          height: 70,
          position: 'relative'
        }
      }}
      labelStyle={{ fontSize: 12 }}
  

    >
      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarLabelStyle:({fontSize:12,marginBottom:10,fontFamily: fontFamily.medium}),
          tabBarLabel: 'หน้าหลัก',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="home" color={color} size={30} style={{ marginTop:10 }} />
          ),
        }}

      />
      <Tab.Screen name="sugar" component={sugarTabbar}
        options={{
          tabBarLabelStyle:({fontSize:12,marginBottom:10}),
          tabBarLabel: 'วัดค่าน่ำตาล',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="water" color={color} size={30} style={{ marginTop: 10 }} />
          ),
        }}
      />
      <Tab.Screen name="ketone" component={ketoneTabbar}
        options={{
          tabBarLabelStyle:({fontSize:12,marginBottom:10,}),
          tabBarLabel: 'วัดค่าคีโต',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="reader" color={color} size={30} style={{ marginTop: 10 }} />
          ),
        }}
      />
      <Tab.Screen name="Account" component={Account}
        options={{
          tabBarLabelStyle:({fontSize:12,marginBottom:10}),
          tabBarLabel: 'โปรไฟล์',
          tabBarIcon: ({ color, size }) => (
            <Ionicon name="person" color={color} size={30} style={{ marginTop: 10 }} />
          ),
        }}
      />

    </Tab.Navigator>
  )
}


const TabBar = ({ state, descriptors, navigation, focused }) => {



  const [color, setColour] = useState(getColour());
  const handleClick = () => { setColour(getColour()); }


  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12, backgroundColor: '#1631C2' }}>

      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Home')}
        style={{ padding: 10, alignItems: 'center', borderRadius: 10, }}
      >

        <Ionicon
          name={"home"}
          size={24}
          color={colors.black}
        />
        <Text>หน้าหลัก</Text>
      </TouchableOpacity>



      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('sugar')}
        style={{ padding: 10, alignItems: 'center', borderRadius: 10 }}
      >
        <Ionicon
          name={"water"}
          size={24}
          color={colors.black}
        />
        <Text>วัดน้ำตาล</Text>
      </TouchableOpacity>


      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('ketone')}
        style={{ padding: 10, alignItems: 'center', }}
      >
        <Ionicon
          name={"reader"}
          size={24}
          color={colors.black}
        />
        <Text>วัดคีโต</Text>
      </TouchableOpacity>


      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Account')}
        style={{ padding: 10, alignItems: 'center', }}
      >
        <Ionicon
          name={"person"}
          size={24}
          color={colors.black}
        />
        <Text>โปรไฟล์</Text>
      </TouchableOpacity>

    </View>
  );
}

const sugarTabbar = () => {
  return (
    <Sugartab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1631C2',
        }
      }}>
      <Sugartab.Screen name='Page1' component={Page1} />
      <Sugartab.Screen name='Page2' component={Page2} />
      <Sugartab.Screen name='Page3' component={Page3} />
      <Sugartab.Screen name='Find_device' component={find_device} />
      <Sugartab.Screen name='Loadedbuletooth' component={Loadedbuletooth} />
    </Sugartab.Navigator>
  )
}

const ketoneTabbar = () => {
  return (
    <Ketonetab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1631C2',
        }
      }}
    >
      <Ketonetab.Screen name='Kepage1' component={Kpage1} />
      <Ketonetab.Screen name='Kepage2' component={Kpage2} />
      <Ketonetab.Screen name='Kepage3' component={Kpage3} />
      <Sugartab.Screen name='Find_device' component={find_device} />
    </Ketonetab.Navigator>
  )
}


const styles = StyleSheet.create({
  appbuttonbackground: {
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#fff'

  }
})

export default Tabs;