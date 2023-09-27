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

import { IPage3 } from '../sugar'
import Header from '../../../components/header'

/**
 * @param {object} props
 * @param {IPage3} props.value
 * @param {(value: string) => void} props.onChanged
 */


const Page3 = ({ navigation, props }) => {

  const testrec = testrecom['0']

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{
        ...globalStyles2.welcome_padding,
      }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:20}}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>5</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>เมื่อหยุดเป่าแล้ว เครื่องจะทำการประเมินผล และอ่านค่าให้ที่ จอภาพแสดงผล ว่ามีระดับน้ำตาลในเลือดเท่าไหร่
                *** ค่าที่แสดงผลบนจอ จะแสดงผลเป็น BHB, ACE, ระดับน้ำตาล
              </Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>6</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>เมื่อเครื่องแสดงผลที่หน้าจอแล้ว ทำการปิดสวิชท์เครื่องด้านข้าง </Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>

          {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>6</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>{testrec.description}</Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View> */}

          <Botton
            text='ถัดไป'
            textStyle={{
              alignSelf: 'center'
            }}
            containerStyle={{
              paddingHorizontal: 16,
              marginTop: 30,
              marginBottom: 40,
              flexDirection: 'column',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              width: 220
            }}
            activeOpacity={0.75}
            onPress={() => navigation.navigate('Find_device')}
          >
          </Botton>

        </ScrollView>

      </View>
    </SafeAreaView>

  )
}

export default Page3


const styles = StyleSheet.create({
  Imageheader: {
    width: 160,
    height: 240,
    borderRadius: 20
  },

})