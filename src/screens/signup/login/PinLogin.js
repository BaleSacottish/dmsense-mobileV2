import Icon from "react-native-vector-icons/Ionicons"
import React, { useEffect, useRef, useState } from "react"
import { ImageBackground, SafeAreaView, StatusBar, Text, View, StyleSheet,TouchableOpacity} from "react-native"
import ReactNativePinView from "react-native-pin-view"

const PinLogin = () => {
    const pinView = useRef(null)
    const [showRemoveButton, setShowRemoveButton] = useState(false)
    const [enteredPin, setEnteredPin] = useState("")
    const [showCompletedButton, setShowCompletedButton] = useState(false)
    useEffect(() => {
        if (enteredPin.length > 0) {
            setShowRemoveButton(true)
        } else {
            setShowRemoveButton(false)
        }
        if (enteredPin.length === 6) {
            setShowCompletedButton(true)
        } else {
            setShowCompletedButton(false)
        }
    }, [enteredPin])
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F5FA", justifyContent: "center", alignItems: "center" }}>
            <View>
                <View style={{ alignItems: 'center' }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            fontWeight: '700',
                            fontSize: 24,
                            color: '#1631C2',
                            marginBottom: 5,
                        }}>เข้าสู่ระบบ</Text>
                </View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontWeight: '700',
                        fontSize: 24,
                        color: '#809BD0',
                        marginBottom: 30,

                    }}>กรุณากรอก Pin 6 หลัก</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                    <ReactNativePinView
                        inputSize={32}
                        ref={pinView}
                        pinLength={6}
                        buttonSize={70}
                        onValueChange={value => setEnteredPin(value)}
                        buttonAreaStyle={{
                            marginTop: 1,
                            padding: 40
                        }}
                        inputAreaStyle={{
                            marginBottom: 2,
                        }}
                        inputViewEmptyStyle={{
                            backgroundColor: "#FFF",
                            borderWidth: 10,
                            borderColor: "#FFF",
                        }}
                        inputViewFilledStyle={{
                            backgroundColor: "#1631C2"
                        }}
                        buttonViewStyle={{
                            borderWidth: 1,
                            borderColor: "#FFF",
                            backgroundColor: '#FFF',
                        }}
                        buttonTextStyle={{
                            fontWeight: '700',
                            fontSize: 30,
                            color: "#809BD0",
                        }}
                        onButtonPress={key => {
                            if (key === "custom_right") {
                                pinView.current.clear()
                            }
                            // check password code for take password code for navigate //
                            if (key === "custom_left") {
                                alert("Pin is : " + enteredPin)
                            }
                        }}


                        customRightButton={showRemoveButton ? <Text style={styles.numtext}>ลบ</Text> : undefined}
                        customLeftButton={showCompletedButton ? <Icon name={"ios-unlock"} size={36} color={"#FFF"} /> : undefined}
                    />
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
    heading: {
        color: '#8469cf',
        textAlign: 'center',
        marginBottom: 15
    },
    numtext: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 30,
        color: '#809BD0',
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 50,
        marginBottom: 1,
        width: 70,
        height: 70,
        marginHorizontal: 10
    }
})

export default PinLogin