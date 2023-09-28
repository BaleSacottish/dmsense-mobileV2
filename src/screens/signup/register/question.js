import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Dimensions, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RadioForm from 'react-native-simple-radio-button'



const Question = () => {

    const [value, setValue] = useState(0);
    const [selectedRadio, setSelectedRadio] = useState(1)

    const item = [
        { label: "คำตอบ คำตอบ คำตอบ คำตอบ  ", value: 0 },
        { label: "something", value: 1 },
        { label: "something", value: 2 },
    ]


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
                        fontSize: 24,
                        color: '#1631C2',
                        marginBottom: 30,
                    }}>
                        มาตอบคำถามสุขภาพกัน
                    </Text>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={{
                            color: '#0F7FAB',
                            fontWeight: 'bold',
                            fontSize: 16,
                            marginBottom: 30,

                        }}>
                            คำถาม คำถาม คำถาม
                            คำถาม คำถาม คำถาม
                            คำถาม คำถาม คำถาม
                            คำถาม คำถาม คำถาม
                            คำถาม คำถาม คำถาม
                            คำถาม คำถาม คำถาม
                        </Text>

                    </View>


                </View>
                {/* <RadioForm
                    radio_props={item}
                    onPress={(value) => setValue(value)}
                    buttonColor="#0F7FAB"
                    labelColor="#0F7FAB"
                    selectedButtonColor="#0F7FAB"
                    selectedLabelColor="#0F7FAB" /> */}


                <TouchableOpacity onPress={() => setSelectedRadio(1)}>
                    <View style={styles.wrapper}>
                        <View style={styles.radio}>
                            {selectedRadio == 1 ? <View style={styles.radioBg}></View> : null}
                        </View>
                        <Text style={styles.textTitleRadio}>test1</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedRadio(2)}>
                    <View style={styles.wrapper}>
                        <View style={styles.radio}>
                            {selectedRadio == 2 ? <View style={styles.radioBg}></View> : null}
                        </View>
                        <Text style={styles.textTitleRadio}>test2</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedRadio(3)}>
                    <View style={styles.wrapper}>
                        <View style={styles.radio}>
                            {selectedRadio == 3 ? <View style={styles.radioBg}></View> : null}
                        </View>
                        <Text style={styles.textTitleRadio}>test3</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSelectedRadio(4)}>
                    <View style={styles.wrapper}>
                        <View style={styles.radio}>
                            {selectedRadio == 4 ? <View style={styles.radioBg}></View> : null}
                        </View>
                        <Text style={styles.textTitleRadio}>test4</Text>
                    </View>
                </TouchableOpacity>



            </View>

            <View style={{ alignItems: 'center' }}>
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

export default Question