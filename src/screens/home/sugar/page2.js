import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import testrecom from '../../../contants/testrecom'
import globalStyles from '../../../contants/globalStyles'
import globalStyles2 from '../../../contants/globalStyles2'
import colors from '../../../contants/colors'
import Botton from '../../../components/button'
import { fontFamily, fontSize } from '../../../contants/fonts'


import moment from 'react-moment'

import { IPage2 } from '../sugar'

/**
 * @param {object} props
 * @param {IPage2} props.value
 * @param {(value: string) => void} props.onChanged
 */

const Page2 = (props) => {

  const testrec = testrecom['0']


  return (
    <SafeAreaView>
      <View style={{
        ...globalStyles2.welcome_padding,
      }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '20%', }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>2</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>{testrec.description}</Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '20%', }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>2</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>{testrec.description}</Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '20%', }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>3</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>{testrec.description}</Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>
        </ScrollView>

      </View>
    </SafeAreaView>

  )
}

export default Page2;

const styles = StyleSheet.create({
  Imageheader: {
    width: 160,
    height: 240,
    borderRadius: 20
  },

})