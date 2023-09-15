import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Logo from '../src/assets/logo.png'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
const inputs = Array(6).fill('')
let newInputIndex = 0
const Testpassword = () => {
    const input = useRef()
    const [PASS, setPASS] = useState({ 0: '', 1: '', 2: '', 3: '', 4: '', 5: '' })
    const [nextInputIndex, setNextInputIndex] = useState(0)

    const handleChangeText = (text, index) => {
        const newPASS = { ...PASS }
        newPASS[index] = text
        setPASS(newPASS)

        const lastInputIndex = inputs.length - 1
        if (!text) { newInputIndex = index === 0 ? 0 : index - 1 }
        else {
            newInputIndex = index === lastInputIndex ? lastInputIndex
                : index + 1
        }
        setNextInputIndex(newInputIndex)

    }

    useEffect(() => {
        input.current.focus()
    }, [nextInputIndex])

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={styles.container}>
                {/* <KeyboardAvoidingView style={styles.container}> */}
                <View style={{ paddingHorizontal: 30 }}>
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
                            marginBottom: 30,

                        }}>กรุณากรอก Pin 6 หลัก</Text>

                </View >
                <View style={styles.passwordContainer}>
                    {inputs.map((inp, index) => {
                        return (
                            <View key={index.toString()} style={styles.inputContainer}>
                                <TextInput
                                    value={PASS[index]}
                                    onChangeText={(text) => handleChangeText(text, index)}
                                    style={styles.input}
                                    keyboardType='numeric'
                                    maxLength={1}
                                    ref={nextInputIndex === index ? input : null}
                                />
                            </View>
                        )
                    })}
                </View>
                {/* </KeyboardAvoidingView> */}

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>1</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>2</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>3</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>5</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>6</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>7</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>8</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>9</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={styles.buttonnull}>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>0</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { }}
                        style={styles.button}>
                        <Text
                            style={styles.numtext}>ลบ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>

    )
}
const { width } = Dimensions.get('window')
const inputWidth = Math.round(width / 9)


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'

    },
    heading: {
        color: '#8469cf',
        textAlign: 'center',
        marginBottom: 15
    },
    inputContainer: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: '#8469cf',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,

    },
    input: {
        fontSize: 15,
        textAlign: 'center',
        // backgroundColor: 'red',
        paddingHorizontal: 15
    },
    afterinput: {
        backgroundColor: '#1631C2',
        fontSize: 15,
        textAlign: 'center',
        paddingHorizontal: 15,
        borderRadius: 20
    },
    passwordContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        paddingBottom: 50
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
    buttonnull: {
        padding: 15,
        borderRadius: 30,
        marginBottom: 30,
        width: 70,
        height: 70,
        marginHorizontal: 10
    },
    numtext: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        color: '#809BD0'
    }
})

export default Testpassword