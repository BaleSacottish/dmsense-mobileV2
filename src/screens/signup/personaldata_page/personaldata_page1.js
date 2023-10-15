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
    Platform,
    Button,
    Picker
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import DateTimePicker from 'react-native-modal-datetime-picker'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown'
import DropDownPicker from 'react-native-dropdown-picker'
import { Dropdown } from 'react-native-element-dropdown';

import Botton from '../../../components/button'
import globalStyles from '../../../contants/globalStyles'
import Header2 from '../../../components/header2'
import { fontFamily, fontSize } from '../../../contants/fonts'
import colors from '../../../contants/colors'

import DatePicker from 'react-native-date-picker'

import styles from '../../../contants/styles'


const Personaldata_page1 = ({ navigation, props }) => {



    const Genders = [
        { gender: 'ผู้ชาย', },
        { gender: 'ผู้หญิง' },
        { gender: 'อื่นๆ' }
    ]

    const [selectGender, setSelectGender] = useState('ตัวเลือก')
    const [isClickedgender, setIsclickedgender] = useState(false);


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)
    const [selectedDate, setSelectedDate] = useState('ตัวเลือก')


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
        <SafeAreaView style={{ flex: 1 }}>
            <Header2 />
            <View style={{
                ...globalStyles.welcome_padding,
                justifyContent: 'space-between'
            }}>
                <View  >
                    <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.title, color: colors.blue, alignSelf: 'center' }}>กรุณากรอกข้อมุลส่วนตัว</Text>


                    <View style={{ padding: 10 }}>
                        <TouchableOpacity style={{ borderBottomWidth: 1, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between', borderBottomColor: colors.pink }}
                            onPress={() => { showDatePicker() }}
                        >
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }}>วัน เดือน ปีเกิด</Text>
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, marginBottom: 10 }}>{selectedDate}</Text>
                        </TouchableOpacity>
                        <DateTimePicker
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleDateConfirm}
                            onCancle={hideDatePicker}
                        />
                        <View style={{ borderBottomWidth: 1, marginTop: 20, justifyContent: 'space-between', borderBottomColor: colors.pink, flexDirection: 'row' }} >
                            <TextInput keyboardType='number-pad'
                                placeholder='กรอกน้ำหนัก(กก)' placeholderTextColor={colors.blue_transparent_1} style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }} />
                            <TextInput keyboardType='number-pad'
                                placeholder='กรอก' placeholderTextColor={colors.blue_transparent_1} style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }} />
                        </View>

                        <View style={{ borderBottomWidth: 1, marginTop: 20, justifyContent: 'space-between', borderBottomColor: colors.pink, flexDirection: 'row' }} >
                            <TextInput keyboardType='number-pad'
                                placeholder='กรอกส่วนสูง(ซม)' placeholderTextColor={colors.blue_transparent_1} style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }} />
                            <TextInput keyboardType='number-pad'
                                placeholder='กรอก' placeholderTextColor={colors.blue_transparent_1} style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }} />
                        </View>

                        <TouchableOpacity style={{ borderBottomWidth: 1, marginTop: 20, justifyContent: 'space-between', borderBottomColor: colors.pink, flexDirection: 'row' }}
                            onPress={() => {
                                setIsclickedgender(!isClickedgender)
                            }}
                        >
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, }}>เพศ</Text>
                            <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, marginBottom: 10 }}>{selectGender}</Text>
                        </TouchableOpacity>

                        {isClickedgender ?
                            <View style={{ height: '25%', alignSelf: 'flex-end', justifyContent: 'center' }}>
                                {Genders.map((item, gender) => (


                                    <TouchableOpacity
                                        onPress={() => {
                                            setSelectGender(item.gender)
                                            setIsclickedgender(false)
                                        }}
                                    >
                                        <Text style={{ fontFamily: fontFamily.medium, fontSize: fontSize.titleboty, color: colors.blue_transparent_1, marginTop: 5 }}>{item.gender}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View> : null
                        }



                    </View>




                </View>
                <Botton
                    text='ถัดไป'
                    textStyle={{
                        alignSelf: 'center',
                        color: colors.pink,
                    }}
                    containerStyle={{
                        backgroundColor: colors.pink_2,
                        paddingHorizontal: 16,
                        marginTop: 10,
                        marginBottom: 40,
                        flexDirection: 'column',
                        alignSelf: 'center',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 220,

                    }}
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('Personaldata_page2')}
                >
                </Botton>

            </View>
        </SafeAreaView>

    )
}

export default Personaldata_page1


