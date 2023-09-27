import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import React from 'react'

import Header from '../../components/header'
import globalStyles from '../../contants/globalStyles'
import colors from '../../contants/colors'
import { fontFamily, fontSize } from '../../contants/fonts'

import Kpage1 from './ketone/kpage1'

const ketone = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <ScrollView>
        <View sstyle={{
              ...globalStyles.welcome_padding,
            }}>
          <Kpage1 />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default ketone