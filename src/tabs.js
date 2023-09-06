import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'

import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../src/contants/colors';

import Account from './screens/home/account';
import Home from './screens/home/home';
import ketone from './screens/home/ketone';
import sugar from './screens/home/sugar';

const Tab = createBottomTabNavigator();

/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

const Tabs = ({ navigation, route }) => {
  return (
    <Tab.Navigator
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
        }
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="sugar" component={sugar} />
      <Tab.Screen name="ketone" component={ketone} />

      <Tab.Screen name="Account" component={Account} />

    </Tab.Navigator>
  )
}


const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12, backgroundColor: '#1631C2' }}>
      <View style={{alignItems:'center',backgroundColor:'#fff'}}>
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('Home')}
          style={{ padding: 10,alignItems:'center' }}
        >
          <Ionicon
            name={"home"}
            size={24}
            color={colors.black}
          />
          <Text>หน้าหลัก</Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems:'center', flexDirection:'row',backgroundColor:'#fff'}}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('sugar')}
        style={{ padding: 10,alignItems:'center', }}
      >
        <Ionicon
          name={"water"}
          size={24}
          color={colors.black}
        />
        <Text>วัดน้ำตาล</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems:'center', flexDirection:'row',backgroundColor:'#fff'}}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('ketone')}
        style={{ padding: 10,alignItems:'center', }}
      >
        <Ionicon
          name={"reader"}
          size={24}
          color={colors.black}
        />
      <Text>วัดน้ำตาล</Text>
      </TouchableOpacity>
      </View>
      <View style={{alignItems:'center', flexDirection:'row',backgroundColor:'#fff'}}>
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Account')}
        style={{ padding: 10,alignItems:'center', }}
      >
        <Ionicon
          name={"person"}
          size={24}
          color={colors.black}
        />
        <Text>วัดน้ำตาล</Text>
      </TouchableOpacity>
</View>
    </View>
  );
}

export default Tabs;