import { View, TouchableOpacity, Text,Animated,StyleSheet } from 'react-native'
import React,{useState} from 'react'

import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';

import Ionicon from 'react-native-vector-icons/Ionicons';
import colors from '../src/contants/colors';
import {useTheme} from 'react-native-paper';

import Account from './screens/home/account';
import Home from './screens/home/home';
import ketone from './screens/home/ketone';
import sugar from './screens/home/sugar';


const Tab = createBottomTabNavigator();

const colours = ['#fff','red']
const getColour = () =>[Math.floor(Math.random() * colors.length)];


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
          backgroundColor: '#1631C2',
        }
      }}
    >
      <Tab.Screen name="Home" component={Home}  />
      <Tab.Screen name="sugar" component={sugar} />
      <Tab.Screen name="ketone" component={ketone} />

      <Tab.Screen name="Account" component={Account} />

    </Tab.Navigator>
  )
}


const TabBar = ({ state, descriptors, navigation,focused }) => {

 

  const [color, setColour] = useState(getColour());
  const handleClick = () => {setColour(getColour());}


  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 12,  backgroundColor:'#1631C2'}}>
     
        <TouchableOpacity
          activeOpacity={0.75}
          onPress={() => navigation.navigate('Home')}
          style={{ padding: 10,alignItems:'center',borderRadius:10,}}
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
        style={{ padding: 10,alignItems:'center',borderRadius:10 }}
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
        style={{ padding: 10,alignItems:'center', }}
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
        style={{ padding: 10,alignItems:'center', }}
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

const styles = StyleSheet.create({
  appbuttonbackground:{
    padding: 10,
    alignItems:'center',
    borderRadius:10,
    backgroundColor:'#fff'
    
  }
})

export default Tabs;