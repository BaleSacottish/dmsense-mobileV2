import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'


import Header2 from '../../../components/header2'
import colors from '../../../contants/colors'
import Botton from '../../../components/button'

import globalStyles from '../../../contants/globalStyles'
import { fontFamily,fontSize } from '../../../contants/fonts'
import Inputtext from '../../../components/inputtext'

import React from 'react'
const Login = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header2 />
            <View style={{
                ...globalStyles.welcome_padding,
                justifyContent: 'space-between',
            }}>
                <View style={{ paddingHorizontal: 25, }}>
                    <View style={{ alignItems: 'center' }}>
                        <Text
                            style={{
                                fontFamily: fontFamily.bold,
                                fontSize: fontSize.subTitle,
                                color: colors.blue,
                                borderRadius: 20,
                            }}>เข้าสู่ระบบ</Text>
                    </View>

                    <Text
                        style={{
                            alignSelf: 'center',
                            fontFamily: fontFamily.bold,
                            fontSize: fontSize.subTitle,
                            color: colors.blue_transparent_1,
                            borderRadius: 20,
                        }}>กรุณากรอกเลขบัตรประชาชน</Text>
                </View >

                {/* <View style={{
                    flexDirection: 'row',
                    borderBottomColor: '#FFD3E9',
                    borderBottomWidth: 1,
                    marginBottom: 200,
                }}>
                    <TextInput style={{ paddingHorizontal: 150 }}></TextInput>
                </View> */}

                <Inputtext
                    color={colors.blue_transparent_1}
                    placeholder={"1111111"}
                    placeholderTextColor={colors.blue_transparent_1}
                    keyboardType='number-pad'
                    containerStyle={{
                        paddingHorizontal: 16,
                        paddingTop: 24,
                        
                    }}
                    inputStyle={{
                        fontFamily: fontFamily.thin,
                        width: '100%',
                    }}
                />



                <Botton
                    text='ถัดไป'
                    textStyle={{
                        alignSelf: 'center',
                        color: colors.pink,
                    }}
                    containerStyle={{
                        backgroundColor: colors.pink_2,
                        paddingHorizontal: 16,
                        marginTop: 10,
                        marginBottom: 40,
                        flexDirection: 'column',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 220
                    }}
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('Tabs')}
                >
                </Botton>

                {/* <TouchableOpacity
                    onPress={() => { }}
                    style={{
                        backgroundColor: '#FFFFFF',
                        padding: 20,
                        borderRadius: 25,
                        marginBottom: 30,
                        width: 250,
                    }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 16,
                            color: '#FFD3E9'
                        }}>ถัดไป</Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    )
}

export default Login