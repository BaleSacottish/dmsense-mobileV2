import {
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    KeyboardAvoidingView,
    Dimensions,
    TextInput
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import RadioForm from 'react-native-simple-radio-button'

import globalStyles from '../../../contants/globalStyles'
import Header2 from '../../../components/header2'
import colors from '../../../contants/colors'
import { fontFamily, fontSize } from '../../../contants/fonts'
import Botton from '../../../components/button'






/**
   * 
   * @param {object} changed 
   * @param {1|2|3|4} page 
   */

const Question = ({ navigation }) => {

   



    const RenderPage = () => {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 36, paddingVertical: 24 }}>
                <TouchableOpacity
                    style={[{ ...styles.tab_page }, pageIndex == 0 ? { backgroundColor: colors.blue } : { ...globalStyles.shadow_5 }]}
                    onPress={() => setPageIndex(0)}
                />
                <TouchableOpacity
                    style={[{ ...styles.tab_page }, pageIndex == 1 ? { backgroundColor: colors.blue } : { ...globalStyles.shadow_5 }]}
                    onPress={() => setPageIndex(1)}
                />
                <TouchableOpacity
                    style={[{ ...styles.tab_page }, pageIndex == 2 ? { backgroundColor: colors.blue } : { ...globalStyles.shadow_5 }]}
                    onPress={() => setPageIndex(2)}
                />
                <TouchableOpacity
                    style={[{ ...styles.tab_page }, pageIndex == 3 ? { backgroundColor: colors.blue } : { ...globalStyles.shadow_5 }]}
                    onPress={() => setPageIndex(3)}
                />

            </View>
        )
    }

    /**
  * 
  * @param {object} changed 
  * @param {1|2|3|4} page 
  */


    return (
        <SafeAreaView style={{ flex: 1, }}>
            <Header2 />
            <View style={{
                ...globalStyles.welcome_padding,
                justifyContent: 'space-between',
            }}>
              




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
                        width: 220
                    }}
                    activeOpacity={0.75}
                    onPress={() => navigation.navigate('Login')}
                >
                </Botton>


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
        marginTop: 5
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