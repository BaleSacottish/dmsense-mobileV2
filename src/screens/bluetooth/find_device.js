import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'

import Loadedbuletooth from '../../components/loadedbuletooth'

import globalStyles from '../../contants/globalStyles'
import Header from '../../components/header'
import colors from '../../contants/colors'

import { fontFamily, fontSize } from '../../contants/fonts'

const find_device = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{
        ...globalStyles.welcome_padding,
      }}>
        <Text style={{
          fontFamily: fontFamily.bold,
          fontSize: fontSize.subTitle,
          color: colors.blue,
          alignSelf: 'center',
          marginTop: '10%'
        }}>เชื่อมต่ออุปกรณ์</Text>
        {/* Animetion Loading Device */}
       <Loadedbuletooth/>
      </View>
    </SafeAreaView>

  )
}

export default find_device