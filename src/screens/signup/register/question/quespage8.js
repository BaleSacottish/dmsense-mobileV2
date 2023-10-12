import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { questionData } from './component/questions'
import QuestionItem from './component/questionitem'



const QuestionPage8 = ({ navigation, props }) => {
    const [currentQuestion, setCurrentQuestion] = useState(7)
    const [question, setQuestions] = useState(questionData)
    const [value, setValue] = useState(0);
    const [selectedRadio, setSelectedRadio] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25, marginBottom: 5 }}>
                <View style={{ alignItems: 'center' }}>

                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}> 8/10 </Text>

                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 24,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}>
                        มาตอบคำถามสุขภาพกัน
                    </Text>

                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 20,
                            width: 350,
                            color: "#0F7FAB",
                            marginBottom: 30,
                        }}> {questionData[currentQuestion]?.question} </Text>

                    {questionData[currentQuestion]?.Options.map((item) => {
                        if (item.length == 17) {
                            return <TouchableOpacity onPress={() => setSelectedRadio(1)} >
                                <View style={styles.wrapper}>
                                    <View style={styles.radio}>
                                        {selectedRadio == 1 ? <View style={styles.radioBg}></View> : null}
                                    </View>
                                    <Text style={styles.textTitleRadio} >{item}</Text>
                                </View>
                            </TouchableOpacity>

                        } if (item.length == 15) {
                            return <TouchableOpacity onPress={() => setSelectedRadio(2)} >
                                <View style={styles.wrapper}>
                                    <View style={styles.radio}>
                                        {selectedRadio == 2 ? <View style={styles.radioBg}></View> : null}
                                    </View>
                                    <Text style={styles.textTitleRadio} >{item}</Text>
                                </View>
                            </TouchableOpacity>
                        } if (item.length == 11) {
                            return <TouchableOpacity onPress={() => setSelectedRadio(3)} >
                                <View style={styles.wrapper}>
                                    <View style={styles.radio}>
                                        {selectedRadio == 3 ? <View style={styles.radioBg}></View> : null}
                                    </View>
                                    <Text style={styles.textTitleRadio} >{item}</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    })}
                </View>
            </View>

            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('')}
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
                        }}>ตอบ</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    underline: {
        flexDirection: 'row',
        borderBottomColor: '#FFD3E9',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    textinputStyle: {
        textAlign: 'right',
        fontWeight: '700',
        fontSize: 16,
        width: 110,
        color: '#809BD0',
        marginHorizontal: -50,
        marginTop: -10

    },
    textStyle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 150,
        color: '#809BD0'
    },
    radio: {
        width: 25,
        height: 25,
        borderColor: "#0F7FAB",
        borderRadius: 20,
        borderWidth: 2,
        margin: 10
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioBg: {
        width: 17,
        height: 17,
        backgroundColor: "#0F7FAB",
        borderRadius: 20,
        margin: 2
    },
    textTitleRadio: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 16,
        width: 150,
        color: "#0F7FAB"
    }

})

export default QuestionPage8