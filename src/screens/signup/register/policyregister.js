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
import React from 'react'

import Header2 from '../../../components/header2'
import colors from '../../../contants/colors'
import { fontFamily, fontSize } from '../../../contants/fonts'
import globalStyles from '../../../contants/globalStyles'
import Botton from '../../../components/button'




const Policyregister = ({navigation}) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header2 />
            <View style={{
                ...globalStyles.welcome_padding,
                justifyContent: 'space-between',
            }}>
                <Text>นโยบายการใช้งาน</Text>

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
                    onPress={() => navigation.navigate('Personaldata_page1')}
                >
                </Botton>

            </View>
        </SafeAreaView>

    )
}

export default Policyregister