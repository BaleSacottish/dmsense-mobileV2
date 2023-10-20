import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RadioForm from 'react-native-simple-radio-button'
import { questionData } from './component/questions'
import QuestionItem from './component/questionitem'



const { height, width } = Dimensions.get('window')
const QuestionPage1 = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const [question, setQuestions] = useState(questionData)
    const listRef = useRef()
    const OnSelectOption = (index, x) => {
        const quesData = question
        quesData.map((item, ind) => {
            if (index == ind) {
                item.marked = x
            }
        })

        let ques = []
        quesData.map(item => {
            ques.push(item)
        })
    }


    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ marginBottom: 100 }}></View>
            <View style={{ flex: 1 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}> {currentIndex + '/' + questionData.length} </Text>

                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 24,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}>
                        มาตอบคำถามสุขภาพกัน
                    </Text>

                </View>

                <FlatList
                    ref={listRef}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x / width
                        setCurrentIndex((x + 1).toFixed(0))
                    }}
                    data={question}
                    renderItem={({ item, index }) => {
                        return (
                            <QuestionItem data={item} selectedOption={(x) => {
                                OnSelectOption(index, x)
                            }} />
                        )
                    }} />

            </View>

            <View style={{ alignItems: 'center' }}>
                {currentIndex == 10 ? (
                     <TouchableOpacity
                     onPress={() => { }}
                     style={{
                         backgroundColor: 'green',
                         padding: 20,
                         borderRadius: 25,
                         marginBottom: 150,
                         width: 250,
                     }}
                     onPress={() => {
                        
                     }}>
                     <Text
                         style={{
                             textAlign: 'center',
                             fontWeight: '700',
                             fontSize: 16,
                             color: '#FFD3E9'
                         }}>ตอบ</Text>

                 </TouchableOpacity>
                ) : (
                     <TouchableOpacity
                     onPress={() => { }}
                     style={{
                         backgroundColor: '#FFFFFF',
                         padding: 20,
                         borderRadius: 25,
                         marginBottom: 150,
                         width: 250,
                     }}
                     onPress={() => {
                         if (currentIndex <= question.length) {
                             listRef.current.scrollToIndex({
                                 animated: true,
                                 index: currentIndex
                             })
                         }
                     }}>
                     <Text
                         style={{
                             textAlign: 'center',
                             fontWeight: '700',
                             fontSize: 16,
                             color: '#FFD3E9'
                         }}>ตอบ</Text>
                 </TouchableOpacity>
                )}
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

export default QuestionPage1