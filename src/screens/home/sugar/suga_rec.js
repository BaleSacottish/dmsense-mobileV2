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
import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack'
import { fontFamily, fontSize } from '../../contants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

import colors from '../../contants/colors';
import Header from '../../components/header';

import Page1 from './Page1';

const { height } = Dimensions.get('screen')

/**
* 
* @param {StackScreenProps<any, any>} props
*/

/**
   * 
   * @param {object} changed 
   * @param {1|2|3|4} page 
   */

const suga_rec = () => {

    const [pageIndex, setPageIndex] = useState(0);
    const [page1, setPage1] = useState('')


    const RenderPage = () => {
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 36, paddingVertical: 24 }}>
            <TouchableOpacity
                style={[{ ...styles.tab_page }, pageIndex == 0 ? { backgroundColor: colors.blue } : { ...globalStyles.shadow_5 }]}
                onPress={() => setPageIndex(0)}
            />
            <TouchableOpacity
                style={[{ ...styles.tab_page }, pageIndex == 1 ? { backgroundColor: colors.blue } : { ...globalStyles.shadow_5 }]}
                onPress={() => setPageIndex(1)}
            />


        </View>
    }





    return (
        <SafeAreaView style={{ flex: 1 }}>ßß
            <Header />
            <View style={{ flex: 1, height: height - 220, backgroundColor: 'white', borderBottomEndRadius: 48, borderBottomStartRadius: 48, overflow: 'hidden' }}>
                <ScrollView>
                    <View
                        style={{
                            ...globalStyles.welcome_padding,
                        }}>
                        <View style={{ marginTop: 36 }} />
                        <Text style={{ paddingHorizontal: 16, fontFamily: fontFamily.medium, fontSize: fontSize.subTitle - 2, color: colors.grey, alignSelf: 'center' }}>ข้อมูลเบื้องต้น</Text>
                        <RenderPage />
                        {
                            pageIndex == 0 ? (
                                <Page1  onChanged={(value) => onChanged()} />
                            ) : null

                        }
                    </View>
                </ScrollView>
                <View style={{ width: '100%', height: 36, backgroundColor: '#FFF' }} />
            </View>
            <TouchableOpacity
                style={{
                    backgroundColor: colors.blue,
                    padding: 14,
                    borderRadius: 32,
                    alignSelf: 'flex-end',
                    margin: 36,
                }}
                disabled={!checkField()}
                onPress={() => submit()}
            >
                <AntDesign
                    name={'arrowright'}
                    color={colors.black}
                    size={fontSize.body + 4}
                />
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    tab_page: {
      width: '23.5%',
      backgroundColor: '#FFF',
      height: 12,
      borderRadius: 24,
    }
  })

export default suga_rec