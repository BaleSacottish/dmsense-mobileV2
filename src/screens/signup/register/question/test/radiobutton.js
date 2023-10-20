import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { questionData } from '../component/questions'

const Testradio = () => {
    const [mood, setMood] = useState("")

    const [currentQuestion, setCurrentQuestion] = useState(1)
    const [question, setQuestions] = useState(questionData)
    const [value, setValue] = useState(0);
    const [selectedRadio, setSelectedRadio] = useState(0)
    return (
        // <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        //     <View style={styles.container}>
        //         <Text style={styles.text}>How do you feel?</Text>

        //         <View style={styles.wrapper}>
        //             {['happy', 'sad'].map(feeling =>
        //             (<View key={feeling} style={styles.mood}>

        //                 <TouchableOpacity style={styles.outter}
        //                     onPress={() => setMood(feeling)}>
        //                     {mood === feeling && <View style={styles.inner} />}
        //                 </TouchableOpacity>

        //                 <Text style={styles.feeling}>{feeling}</Text>
        //             </View>
        //             ))}
        //         </View>

        //     </View>
        // </SafeAreaView>

        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 25, marginBottom: 50 }}>
                <View style={{ alignItems: 'center' }}>

                    <Text style={{
                        textAlign: 'center',
                        fontWeight: '500',
                        fontSize: 15,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}> 2/10 </Text>

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
                            width: 150,
                            color: "#0F7FAB",
                            marginBottom: 30,
                        }}> {questionData[currentQuestion]?.question} </Text>


                    {questionData[currentQuestion]?.Options.map(item =>
                    (<View key={item} style={styles.mood}>
                        <View style={styles.wrapper}>
                            <TouchableOpacity style={styles.outter}
                                onPress={() => setMood(item)}>
                                {mood === item && <View style={styles.inner} />}
                            </TouchableOpacity>
                            <Text style={styles.feeling}>{item}</Text>
                        </View>
                    </View>
                    ))}
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

export default Testradio