import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions,
    TextInput,
    ScrollView,
    FlatList
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'

const {height, width} = Dimensions.get('window');

import Botton from '../../components/button'
import Header from '../../components/header'
import globalStyles2 from '../../contants/globalStyles'
import { Modal } from 'react-native-paper'

const Proflie = ({ navigation, props,langModalVisible,setLangModalVisible,onSelectLang, }) => {


    const [selectedLang, setSelectedLang] = useState(0);
    const [languages, setLangauges] = useState([
        { name: 'English', selected: true },
        { name: 'ไทย', selected: false },
    ]);
    const onSelect = index => {
        const temp = languages;
        temp.map((item, ind) => {
            if (index == ind) {
                if (item.selected == true) {
                    item.selected = false;
                } else {
                    item.selected = true;
                    setSelectedLang(index);
                }
            } else {
                item.selected = false;
            }
        });
        let temp2 = [];
        temp.map(item => {
            temp2.push(item);
        });
        setLangauges(temp2);
    };



    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <Header />
            <ScrollView>
                <View style={{
                    ...globalStyles2.welcome_padding,
                }}>

                    <View style={{ paddingHorizontal: 20, marginBottom: 40, }}>
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
                            }}>แก้ไขโปรไฟล์</Text>
                    </TouchableOpacity> */}
                        {/* <TouchableOpacity
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
                            }}>เปลี่ยนรหัส</Text>
                    </TouchableOpacity> */}
                        <Botton
                            text='แก้ไขโปรไฟล์'
                            textStyle={{
                                alignSelf: 'center',
                                color: '#fff'
                            }}
                            containerStyle={{
                                paddingHorizontal: 16,
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
                            text='เปลี่ยนรหัส'
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
                            onPress={() => navigation.navigate('Page2')}
                        >
                        </Botton>

                        <Botton
                            text='ภาษา'
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
                                borderColor: '#1631C2',
                                marginBottom: 40
                            }}
                            activeOpacity={0.75}
                            onPress={() => navigation.navigate('Page2')}
                        >
                        </Botton>

                       




                    </View>

                </View>
            </ScrollView>
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
        marginBottom: 5
    },
    textinput: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 150
    }, Imageheader: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },


    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        backgroundColor: 'rgba(0,0,0,.5)',
    },
    modalView: {
        margin: 20,
        width: width - 20,
        // height: height / 2,

        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    languageItem: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        marginTop: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    },
    btns: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    btn1: {
        width: '40%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn2: {
        width: '40%',
        height: 50,
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#4B68E9',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Proflie