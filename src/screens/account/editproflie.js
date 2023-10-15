import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

import Header from '../../components/header'
import globalStyles2 from '../../contants/globalStyles2'
import Botton from '../../components/button'

const EditProflie = ({ navigation, props }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header />
            <View style={{
                ...globalStyles2.welcome_padding,
            }}>
                <View style={{ paddingHorizontal: 25, marginBottom: 20, padding:20 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={require('../../assets/images/miku.jpeg')}
                            style={styles.Imageheader} />

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 20,
                            color: '#809BD0',
                            marginBottom: 10,
                        }}>
                            คุณ username
                        </Text>

                        <Text style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 14,
                            color: '#FFD3E9',
                            marginBottom: 10,
                        }}>
                            1 2345 6 789x xx x
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

                <View style={{ alignItems: 'center' }}>


                    <Botton
                        text='ตกลง'
                        textStyle={{
                            alignSelf: 'center',
                            color: '#fff'
                        }}
                        containerStyle={{
                            paddingHorizontal: 16,
                            marginTop: 40,
                            flexDirection: 'column',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 220,
                        }}
                        activeOpacity={0.75}
                        onPress={() => navigation.navigate('EditProflie')}
                    >
                    </Botton>

                    <Botton
                        text='ยกเลิก'
                        textStyle={{
                            alignSelf: 'center',
                            borderColor: '#1631C2',
                            color: '#1631C2'
                        }}
                        containerStyle={{
                            paddingHorizontal: 16,
                            marginTop: 10,
                            flexDirection: 'column',
                            alignSelf: 'center',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 220,
                            backgroundColor: '#F6F5FA',
                            borderColor: '#1631C2',
                            borderWidth: 2,
                            borderColor: '#1631C2'
                        }}
                        activeOpacity={0.75}
                        onPress={() => navigation.navigate('Account')}
                    >
                    </Botton>
                    {/* <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: '#1631C2',
                            padding: 20,
                            borderRadius: 25,
                            marginBottom: 10,
                            width: 250,
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '700',
                                fontSize: 16,
                                color: '#FFD3E9'
                            }}>ตกลง</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={{
                            backgroundColor: '#FFFFFF',
                            borderColor: '#1631C2',
                            padding: 20,
                            borderRadius: 25,
                            marginBottom: 10,
                            width: 250,
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                fontWeight: '700',
                                fontSize: 16,
                                color: '#1631C2'
                            }}>ยกเลิก</Text>
                    </TouchableOpacity> */}

                </View>
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
        marginBottom: 10
    },
    textinput: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 150
    },
    Imageheader: {
        width: 80,
        height: 80,
        borderRadius: 40,

    }
})

export default EditProflie