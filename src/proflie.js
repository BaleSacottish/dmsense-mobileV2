import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../src/assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const Proflie = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25 ,marginBottom: 50}}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 24,
                        color: '#1631C2',
                        marginBottom: 100,
                    }}>
                        กรุณากรอกข้อมูลส่วนตัว
                    </Text>

                </View>
                <View style={styles.underline}>
                    <TextInput style={styles.textinput} placeholder='วัน เดือน ปี เกิด' placeholderTextColor="#809BD0" ></TextInput>
                </View>

                <View style={styles.underline}>
                    <TextInput style={styles.textinput} placeholder='กรอกน้ำหนัก (กก)' placeholderTextColor="#809BD0" ></TextInput>
                </View>

                <View style={styles.underline}>
                    <TextInput style={styles.textinput} placeholder='ส่วนสูง (ซม)' placeholderTextColor="#809BD0" ></TextInput>
                </View>

                <View style={styles.underline}>
                    <TextInput style={styles.textinput} placeholder='เพศ' placeholderTextColor="#809BD0" ></TextInput>
                </View>
            </View>

            <View style={{alignItems: 'center' }}>
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
            </View>

        </SafeAreaView>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'

    },

    button: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 30,
        marginBottom: 15,
        width: 70,
        height: 70,
        marginHorizontal: 10
    },
    underline: {
        flexDirection: 'row',
        borderBottomColor: '#FFD3E9',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    textinput: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 150
    }
})

export default Proflie