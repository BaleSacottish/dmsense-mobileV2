import {
    View,
    Text,
    Touchable,
    TouchableOpacity,
    Alert,
    SafeAreaView,
    StyleSheet,
    Image
} from 'react-native'
import React, { useEffect, useState } from 'react'

import { StackScreenProps } from '@react-navigation/stack'
import moment from 'moment'
import testrecom from '../../../contants/testrecom'
import globalStyles from '../../../contants/globalStyles'
import globalStyles2 from '../../../contants/globalStyles2'
import colors from '../../../contants/colors'
import Botton from '../../../components/button'

import { fontFamily, fontSize } from '../../../contants/fonts'

import Page2 from './page2'
import Account from '../account'


/**
 * @param {object} props
 * @param {IPage1} props.value
 * @param {(value: string) => void} props.onChanged
 */

const reccom1 = useState['']



const Page1 = ({navigation,props}) => {

    
    

    const testrec = testrecom['0']

    return (
        <SafeAreaView>
            <View style={{
                ...globalStyles2.welcome_padding,
            }}>
                <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.subTitle - 2, color: colors.grey, alignSelf: 'center', }}>วิธีการใช้งาน</Text>
                <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.bule, marginTop: '15%' }}>{testrec.toppic}</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '20%', }}>
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
                            marginTop: 80,
                            flexDirection: 'column',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 220
                        }}
                        activeOpacity={0.75}
                        onPress = {() => navigation.navigate('Account')}
                    >
                </Botton>

            </View>
        </SafeAreaView>

    )
}

export default Page1;


const styles = StyleSheet.create({
    Imageheader: {
        width: 160,
        height: 240,
        borderRadius: 20
    },

})