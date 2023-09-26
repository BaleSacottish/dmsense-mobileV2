import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Welcome = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ paddingHorizontal: 25, marginBottom: 200 }}>
        <View style={{ alignItems: 'center' }}>
          <Image source={require('../src/assets/images/logo.png')} />
        </View>
      </View>



      <View style={{ alignItems: 'center'  }}>
        <TouchableOpacity
          onPress={() => { }}
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
          onPress={() => { }}
          style={{
            backgroundColor: '#FFD3E9',
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
              color: '#1631C2'
            }}>มีบัญชีอยู่แล้ว</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Welcome 