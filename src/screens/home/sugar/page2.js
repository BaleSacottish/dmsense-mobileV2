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
import Header from '../../../components/header'

/**
 * @param {object} props
 * @param {IPage2} props.value
 * @param {(value: string) => void} props.onChanged
 */

const Page2 = ({ navigation, props }) => {

  const testrec = testrecom['0']


  return (

    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{
        ...globalStyles2.welcome_padding,
      }}>

        <ScrollView>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>

            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>

              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>2</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>เปิดสวิชท์เครื่องด้านข้าง แล้วหน้าจอแสดงผลบนเครื่องเปิดขึ้น</Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>3</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>เครื่องเมื่อเปิดเครื่องแล้ว ไฟแสดงสถานะ “สีแดง” (หมายถึง เครื่องกำลังเตรียมพร้อมสำหรับการเป่า) เมื่อเครื่องพร้อมทำงานก็จะมีีไฟแสดงสถานะขึ้น “สีเขียว” และมีตัวอักษรแสดงไว้ที่จอ คำว่า Blow และให้ทำการเป่าทันที
                *** ไฟแสดงสถานะ จะใช้หลอดเดียวเป็น RGB แสดงได้สองสีในหลอดเดียว
              </Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader2} />
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
            <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>4</Text>
              </View>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>การเป่าลม ให้กดปุ่ม start อมที่หลอดเป่า แล้วเป่าด้วยลมแรงเสมอกันต้องไม่ขาดช่วง เครื่องจะนับถอยหลัง 15 วินาที จนมีเสียงเตือนให้หยุดเป่า
              </Text>
            </View>
            <Image source={require('../../../assets/images/st.png')} style={styles.Imageheader} />
          </View>

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
            onPress={() => navigation.navigate('Page3')}
          >
          </Botton>

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
  Imageheader2: {
    width: 160,
    height: 240,
    borderRadius: 20,
    marginTop: 40
  },

})