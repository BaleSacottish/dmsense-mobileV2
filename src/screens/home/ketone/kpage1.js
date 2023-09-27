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
import globalStyles2 from '../../../contants/globalStyles2'
import colors from '../../../contants/colors'
import { fontFamily, fontSize } from '../../../contants/fonts'
import Botton from '../../../components/button'
import Header from '../../../components/header'

/**
 * @param {object} props
 * @param {IPage1} props.value
 * @param {(value: string) => void} props.onChanged
 */

const Kpage1 = ({ navigation, props }) => {

    const testrec = testrecom['0']

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <View style={{
                ...globalStyles2.welcome_padding,
            }}>
                <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.subTitle - 2, color: colors.grey, alignSelf: 'center', marginTop: '10%' }}>วิธีการใช้งาน</Text>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: '15%', width: '90%', alignSelf: 'center' }}>{testrec.toppic}</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '5%', padding: 20 }}>
                    <View style={{ width: '50%', marginRight: 15, justifyContent: 'center', alignItems: 'center', }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: 35, height: 35, borderColor: colors.blue_transparent_5, borderRadius: 20, borderWidth: 1 }}>
                            <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_5, borderRadius: 20, }}>1</Text>
                        </View>
                        <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: 10 }}>{testrec.description}</Text>
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
                        marginTop: 40,
                        flexDirection: 'column',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 220
                    }}
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('Kepage2')}
                >
                </Botton>

            </View>
        </SafeAreaView>

    )
}

export default Kpage1;

const styles = StyleSheet.create({
    Imageheader: {
        width: 160,
        height: 240,
        borderRadius: 20
    },

})