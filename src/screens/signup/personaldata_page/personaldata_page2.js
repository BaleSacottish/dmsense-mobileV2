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
    Platform,
    Button,
    Picker
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

import Header2 from '../../../components/header2'
import globalStyles from '../../../contants/globalStyles'
import Botton from '../../../components/button'
import colors from '../../../contants/colors'
import { fontFamily, fontSize } from '../../../contants/fonts'
import { ScrollView } from 'react-native-gesture-handler'
import Radio from '../../../components/radio'

const Personaldata_page2 = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header2 />
            <View style={{
                ...globalStyles.welcome_padding,

            }}>
                <ScrollView>

                    <View >
                        <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.subTitle, color: colors.blue_transparent_1, alignSelf: 'center', marginBottom: 10 }}>1/10</Text>
                        <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.title, color: colors.blue, alignSelf: 'center' }} >มาตอบคำถามสุขภาพกัน</Text>
                    </View>

                    <View style={{ padding: 10, }}>
                        <View style={{ marginTop: 20, justifyContent: 'space-between', borderBottomColor: colors.pink, }} >
                            <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.titleboty, color: colors.blue_transparent_5, }}>อายุ{'คำนวนจาก /วัน/เดือน/ปีเกิด'}</Text>
                            <Text style={{ marginTop: 5, fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }}>{'คำนวนจาก /วัน/เดือน/ปีเกิด'}</Text>
                        </View>

                        <View style={{marginTop:10}}>
                        <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.titleboty, color: colors.blue_transparent_5, }}>เพศ</Text>
                            <Radio text='เคย'  />
                        </View>

                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    )
}

export default Personaldata_page2