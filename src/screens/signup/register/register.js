import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native'
import React from 'react'

import Header from '../../../components/header';

const Register = ({ navigation, props }) => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Header/>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 24,
                            color: '#1631C2',
                            marginBottom: 5,
                        }}>ลงทะเบียนใหม่</Text>
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
                <TextInput style={{ paddingHorizontal: 150 }}></TextInput>
            </View>

            <TouchableOpacity
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
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Register;