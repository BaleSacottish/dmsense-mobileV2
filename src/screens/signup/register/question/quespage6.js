import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { questionData } from './component/questions'
import QuestionItem from './component/questionitem'



const QuestionPage6 = ({ navigation, props }) => {
    const [currentQuestion, setCurrentQuestion] = useState(5)
    const [question, setQuestions] = useState(questionData)
    const [value, setValue] = useState(0);
    const [selectedRadio, setSelectedRadio] = useState(0)

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25, marginBottom: 50 }}>
                <View style={{ alignItems: 'center' }}>

                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}> 6/10 </Text>

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

                    <View style={styles.underline}>
                        <Text style={styles.textStyle} >โปรดระบุ</Text>
                        <TextInput style={styles.textinputStyle} placeholder='กรอก' placeholderTextColor="#809BD0" ></TextInput>
                    </View>


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
        width: 100,
        color: '#809BD0',
        marginHorizontal: 10,
        marginTop: -10

    },
    textStyle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 200,
        color: '#809BD0'
    },
})

export default QuestionPage6