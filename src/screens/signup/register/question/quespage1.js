import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { questionData } from './component/questions'
import QuestionItem from './component/questionitem'



const QuestionPage1 = ({ navigation, props }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [question, setQuestions] = useState(questionData)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectedDate, setSelectedDate] = useState('      ตัวเลือก')

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }

    const handleDateConfirm = date => {
        console.warn("A date has been picked: ", date)
        const dt = new Date(date)
        const x = dt.toISOString().split('T')
        const x1 = x[0].split('-')
        console.log(x1[2] + '/' + x1[1] + '/' + x1[0])
        setSelectedDate(x1[2] + '/' + x1[1] + '/' + x1[0])
        hideDatePicker()
    }

   
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
                    }}> 1/10 </Text>

                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 20,
                        width: 150,
                        color: "#0F7FAB",
                        marginBottom: 30,
                    }}>
                        มาตอบคำถามสุขภาพกัน
                    </Text>

                    <Text
                        style={{
                            textAlign: 'center',
                            width: 500,
                            fontSize: 16,
                            color: '#1631C2',
                            marginBottom: 30,
                        }}>{questionData[currentQuestion]?.question} </Text>
                    {/* {questionData[currentQuestion]?.Options.map((item) => {
                        return <TouchableOpacity>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                    })} */}

                    <DateTimePicker
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancle={hideDatePicker}
                    />
                </View>

                <View style={styles.underline}>
                    <Text style={styles.textStyle} >วัน เดือน ปี เกิด</Text>
                    <TouchableOpacity style={styles.dateStyle} onPress={() => { showDatePicker() }}>
                        <Text style={styles.textStyle}>{selectedDate}</Text>
                    </TouchableOpacity>
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
        alignItems: 'center',
        borderBottomColor: '#FFD3E9',
        paddingBottom: 5,
        marginBottom: 25
    },

    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textStyle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 150,
        color: '#809BD0'
    },
    dateStyle: {
        textAlign: 'right',
        fontWeight: '700',
        fontSize: 16,
        width: 150,
        color: '#809BD0',
        marginHorizontal: 110
    },

})

export default QuestionPage1