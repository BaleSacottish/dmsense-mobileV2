import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

import Register from './screens/signup/register/register'

import Header from './components/header'
import Botton from './components/button'
import colors from './contants/colors'
import { fontFamily } from './contants/fonts'

const Welcome = ({ navigation, props }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>

      <View style={{ paddingHorizontal: 25, marginBottom: 200 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../src/assets/images/logo.png')} />
        </View>
      </View>

      <Botton
        text='ลงทะเบียนใหม่'
        textStyle={{
          alignSelf: 'center'
        }}
        containerStyle={{
          paddingHorizontal: 16,
          marginTop: 30,
          marginBottom: 10,
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: 220
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Register')}
      >
      </Botton>

      <Botton
        text='มีบัญชีอยู่แล้ว'
        textStyle={{
          alignSelf: 'center',
          color:colors.blue,
        }}
        containerStyle={{
          backgroundColor: colors.pink_2,
          paddingHorizontal: 16,
          marginTop: 10,
          marginBottom: 40,
          flexDirection: 'column',
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          width: 220
        }}
        activeOpacity={0.75}
        onPress={() => navigation.navigate('Login')}
      >
      </Botton>

      {/* <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{
            backgroundColor: '#1631C2',
            padding: 20,
            borderRadius: 25,
            marginBottom: 10,
            width: 250,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: '#FFD3E9'
            }}>ลงทะเบียนใหม่</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD3E9',
            padding: 20,
            borderRadius: 25,
            marginBottom: 10,
            width: 250,
          }}
          onPress={() => navigation.navigate('Register')} >
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
              color: '#1631C2'
            }}>มีบัญชีอยู่แล้ว</Text>
        </TouchableOpacity>
      </View> */}

    </SafeAreaView>
  )
}

export default Welcome 