import {
    View,
    Text,
    SafeAreaView,
    Image,
    StyleSheet,
    Dimensions,
    ScrollView,
    FlatList
} from 'react-native'

import globalStyles from '../../contants/globalStyles'
import colors from '../../contants/colors'
import { fontFamily, fontSize } from '../../contants/fonts'
import Botton from '../../components/button'

import sugaService from '../../services/linechartdatatest'
import chartConfig from '../../components/chartconfig'
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown';
import {
    LineChart,
} from "react-native-chart-kit";
import { dataTest } from './components/datatest'

/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

const { width, height } = Dimensions.get('screen');


const Sugar = ({ navigation, route }) => {
    const [dropdown, setDropdown] = useState(null);
    const [data, setData] = useState(dataTest)
    const items = [
        { label: '7วัน', value: '7D' },
        { label: '1เดือน', value: '1M' },
        { label: '6เดือน', value: '6M' },
        { label: '1ปี', value: '1Y' }
    ]
    const renderFlatList = () => {
        return (
            <FlatList
                style={{ backgroundColor: '#FFF' }}
                scrollEnabled={false}
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.underline}>
                        <Text style={styles.textStyleDate}>{item.date}</Text>
                        <Text style={styles.textStyleSugar}>{item.sugardata}</Text>
                    </View>
                )} />
        )
    }

    const [dataDate, setDataDate] = useState(data)

    const [filter, setFilter] = useState([
        {nameFilter: '7D'},
        {nameFilter: '1M'},
        {nameFilter: '6M'},
        {nameFilter: '1Y'},

    ])

    function filterData(item)
    {
       let dataHasiFilter = [...data]

       if(item.nameFilter=='7D'){
        dataHasiFilter = dataHasiFilter.filter(x => x.date == item.nameFilter)
       }
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
            <ScrollView nestedScrollEnabled={true} >
                <View style={{
                    ...globalStyles.welcome_padding,
                    justifyContent: 'flex-start',
                }}>
                    <View style={{ alignItems: 'right' }}>
                        <Text
                            style={{
                                textAlign: 'right',
                                fontWeight: '700',
                                fontSize: 24,
                                color: '#1631C2',
                                marginBottom: 5,
                            }}>กราฟวัดน้ำตาลในเลือด</Text>
                    </View>

                    {/* Linechart suga */}
                    <View style={{ justifyContent: 'center' }}>
                        <View style={{ alignItems: 'center', marginVertical: 10, padding: 10 }}>
                            <LineChart
                                data={sugaService}
                                width={width * 90 / 100}
                                height={220}
                                chartConfig={chartConfig}
                                bezier
                            />
                            <View style={styles.underline}>
                                <Text style={styles.textStyle} >ดูย้อนหลัง</Text>
                                <View style={{ paddingRight: 100 }} />
                                <View style={{ paddingLeft: 1, width: 140}}>
                                    <Dropdown
                                        data={items}
                                        selectedTextProps={{
                                            style: {
                                                textAlign: 'center',
                                                fontWeight: '700',
                                                fontSize: 17,
                                                width: 150,
                                                color: '#809BD0'
                                            },
                                        }}
                                        labelField="label"
                                        valueField="value"
                                        label="Dropdown"
                                        placeholder="ตัวเลือก"
                                        itemTextStyle={styles.itemStyle}
                                        placeholderStyle={styles.textStyle}
                                        value={dropdown}
                                        onChange={item => {
                                            setDropdown(item.value);
                                            console.log('selected', item);
                                        }}
                                        onPress={() => filterData(item)}
                                    />
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row',justifyContent: 'center',backgroundColor:'#1631C2'}}>
                            <Text style={{
                                textAlign: 'center',
                                fontWeight: '700',
                                fontSize: 15,
                                width: 50,
                                color: '#FFFFFF'
                            }} >วันที่</Text>
                            <Text style={{
                                textAlign: 'right',
                                fontWeight: '700',
                                fontSize: 15,
                                width: 250,
                                color: '#FFFFFF'
                            }}  >ค่าน้ำตาลในเลือด</Text>
                        </View>

                        {renderFlatList()}

                        <Botton
                            text='วัดค่า'
                            textStyle={{
                                alignSelf: 'center'
                            }}
                            containerStyle={{
                                paddingHorizontal: 16,
                                marginTop: 20,
                                flexDirection: 'column',
                                alignSelf: 'center',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 220
                            }}
                            activeOpacity={0.75}
                            onPress={() => { }}
                        ></Botton>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Sugar;

const styles = StyleSheet.create({

    underline: {
        flexDirection: 'row',
        borderBottomColor: '#FFD3E9',
        alignItems: 'right',
        borderBottomWidth: 1,
        paddingBottom: 5
    },
    textStyleSugar: {
        textAlign: 'right',
        fontWeight: '700',
        fontSize: 16,
        width: 150,
        color: '#809BD0',
    },
    textStyleDate: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 17,
        width: 150,
        color: '#809BD0'
    },

    textStyle: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 17,
        width: 150,
        color: '#809BD0'
    },
    itemStyle: {
        textAlign: 'left',
        fontWeight: '700',
        fontSize: 15,
        width: 150,
        color: '#809BD0'
    }
    ,
    dropdown: {
        backgroundColor: 'white',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        marginTop: 20,
        placeholderTextColor: '#809BD0'
    },
    item: {
        paddingVertical: 17,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#809BD0'
    },
    Imageheader: {
        width: 80,
        height: 80,
        borderRadius: 40,

    }
})