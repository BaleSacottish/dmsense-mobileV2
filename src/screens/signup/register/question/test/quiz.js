import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Image,
    KeyboardAvoidingView,
    TouchableOpacity,
    Dimensions,
    StyleSheet,

} from 'react-native';
import { React, useState } from 'react'
import { questionData } from '../component/questions';
import { Option } from 'antd/es/mentions';
import colors from '../../../../../contants/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Quiz = () => {

    const [selectBt, setSelectBt] = useState("")

    const allQuestions = questionData
    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null)
    const [correctOption, setCorrectOption] = useState(null)
    const [showNextButton, setShowNextButton] = useState(false)
    const [isOptionDisabled, setIsOptionsDisabled] = useState(false)
    const [score, setScore] = useState(0)

    const validateAnswer = (selectedOption) => {
        let correct_option = allQuestions[currentQuestionIndex]['correct']
        setCurrentOptionSelected(selectedOption)
        setCorrectOption(correct_option)
        setIsOptionsDisabled(true)
        if (selectedOption == correct_option) {
            setScore(score + 1)
        }
        setShowNextButton(true)

    }

    const handleNext = () => {
        if (currentQuestionIndex == allQuestions.length - 1) {
            // this last quiz
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setCurrentOptionSelected(null)
            setCorrectOption(null)
            setIsOptionsDisabled(false)
            setShowNextButton(false)
        }
    }



    const renderQuestion = () => {
        return (
            <View>
                <View style={{ marginBottom: 100 }}></View>
                {/* Quiz number */}
                <View style={{ alignItems: 'center' }}>
                    <Text style={{
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}>{currentQuestionIndex + 1} / {allQuestions.length} </Text>

                </View>

                <Text style={{
                    textAlign: 'center',
                    fontWeight: '700',
                    fontSize: 24,
                    color: '#1631C2',
                    marginBottom: 30,
                }}>
                    มาตอบคำถามสุขภาพกัน
                </Text>

                {/* Question */}
                <Text style={{
                    textAlign: 'center',
                    color: '#0F7FAB',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 20,
                }}> {allQuestions[currentQuestionIndex]?.question}</Text>

            </View >
        )
    }
    const renderOptions = () => {
        return (

            <View style={{ alignItems: 'center' }}>
                {allQuestions[currentQuestionIndex]?.Options.map(Option =>
                (<View style={styles.mood}>
                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.outter}
                            key={Option}
                            onPress={() => validateAnswer(setSelectBt(Option))}
                            // onPress={() => setSelectBt(Option)}
                            >
                            {selectBt === Option && <View style={styles.inner} />}
                        </TouchableOpacity>
                        <Text style={styles.feeling}>{Option}</Text>
                    </View>
                </View>
                ))}

                {

                    // allQuestions[currentQuestionIndex]?.Options.map(Option => (
                    //     <TouchableOpacity
                    //         onPress={() => validateAnswer(Option)}
                    //         // onPress={handleNext}
                    //         // disabled={isOptionDisabled}
                    //         key={Option}
                    //         style={{
                    //             borderWidth: 3,
                    //             borderColor: Option == correctOption ? 'green' : Option == currentOptionSelected ? '#0F7FAB' : '#0F7FAB',
                    //             height: 60,
                    //             borderRadius: 20,
                    //             flexDirection: 'row',
                    //             alignItems: 'center',
                    //             justifyContent: 'space-between',
                    //             paddingHorizontal: 20,
                    //             marginVertical: 10
                    //         }}>
                    //         <Text style={{
                    //             textAlign: 'left',
                    //             fontWeight: '700',
                    //             fontSize: 16,
                    //             width: 150,
                    //             color: "#0F7FAB"
                    //         }}>{Option}</Text>

                    //         {/* Show Check Or Cross Icon based on correct answer*/}
                    //         {
                    //             Option == correctOption ? (
                    //                 <View style={{
                    //                     width: 30, height: 30, borderRadius: 30 / 2,
                    //                     backgroundColor: 'green',
                    //                     justifyContent: 'center', alignItems: 'center'
                    //                 }}>
                    //                     <MaterialCommunityIcons name="check" style={{
                    //                         color: colors.white,
                    //                         fontSize: 20
                    //                     }} />
                    //                 </View>
                    //             ) : Option == currentOptionSelected ? (
                    //                 <View style={{
                    //                     width: 30, height: 30, borderRadius: 30 / 2,
                    //                     backgroundColor: 'red',
                    //                     justifyContent: 'center', alignItems: 'center'
                    //                 }}>
                    //                     <MaterialCommunityIcons name="close" style={{
                    //                         color: colors.white,
                    //                         fontSize: 20
                    //                     }} />
                    //                 </View>
                    //             ) : null
                    //         }

                    //     </TouchableOpacity>
                    // ))
                }
            </View>
        )
    }
    const renderNextButton = () => {
        if (showNextButton) {
            return (
                <TouchableOpacity
                    onPress={handleNext}
                    style={{
                        backgroundColor: '#1631C2',
                        padding: 20,
                        borderRadius: 25,
                        marginBottom: 150,
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
            )
        } else {
            return (
                <TouchableOpacity
                    style={{
                        backgroundColor: '#FFFFFF',
                        padding: 20,
                        borderRadius: 25,
                        marginBottom: 150,
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
            )
        }
    }



    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView>
                <View style={{ flex: 1 }}>

                    <View style={{ alignItems: 'center' }}>
                        {/* this is question */}
                        {renderQuestion()}
                    </View>

                    {/* this is options */}
                    {renderOptions()}

                    <View style={{ alignItems: 'center' }}>
                        {renderNextButton()}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    feeling: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 16,
        width: 150,
        color: "#0F7FAB"
    },
    mood: {
        flexDirection: 'row',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inner: {
        width: 17,
        height: 17,
        backgroundColor: "#0F7FAB",
        borderRadius: 10,
    },
    outter: {
        width: 25,
        height: 25,
        borderColor: "#0F7FAB",
        borderRadius: 20,
        borderWidth: 2,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: '700'

    },
    /////////////////////////////////////////////////////////////////////
})
export default Quiz