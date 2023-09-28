import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'


import Header from '../../../components/header'
import colors from '../../../contants/colors'
import { fontFamily } from '../../../contants/fonts'
import Botton from '../../../components/button'

import React from 'react'
const Login = () => {
    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header />
            <View style={{ padding: 20 }}>

                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 24,
                            color: '#1631C2',
                            marginBottom: 5,
                        }}>เข้าสู่ระบบ</Text>
                </View>

                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 24,
                        color: '#809BD0',
                        marginBottom: 100,

                    }}>กรุณากรอกเลขบัตรประชาชน</Text>

            </View >

            <View style={{
                flexDirection: 'row',
                borderBottomColor: '#FFD3E9',
                borderBottomWidth: 1,
                marginBottom: 200,
            }}>
                <TextInput style={{ paddingHorizontal: 80 }}></TextInput>
            </View>

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

            <Botton
                text='ถัดไป'
                textStyle={{
                    alignSelf: 'center',
                }}
                containerStyle={{
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
                onPress={() => navigation.navigate('Login')}
            >
            </Botton>


        </SafeAreaView >
    )
}

export default Login