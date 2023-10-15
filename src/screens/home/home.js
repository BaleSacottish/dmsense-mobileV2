import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView
} from 'react-native'
import React from 'react'

import globalStyles from '../../contants/globalStyles'
import colors from '../../contants/colors'
import { fontFamily, fontSize } from '../../contants/fonts'
import Botton from '../../components/button'

import sugaService from '../../services/linechartdatatest'
import chartConfig from '../../components/chartconfig'

import {
  LineChart,
} from "react-native-chart-kit";

/**
 * 
 * @param {StackScreenProps<any, any>} props
 */

const { width, height } = Dimensions.get('screen');


const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{
          ...globalStyles.welcome_padding,
          justifyContent: 'flex-start',
        }}>
          <View style={{ flexDirection: 'row', padding: 5, alignItems: 'center' }}>
            {/* Header and Images */}
            <Image source={require('../../assets/images/miku.jpeg')} style={styles.Imageheader} />
            <View style={{ flexDirection: 'column', marginLeft: 20 }}>
              <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.title, color: colors.blue, }}>สวัสดี</Text>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.subTitle, color: colors.blue_transparent_1 }}>{'คุณ<username>'}</Text>
              <Text style={{ fontFamily: fontFamily.regular, fontSize: fontSize.body, color: colors.pink, }}>{'Id12345555'}</Text>
            </View>
          </View>
          {/* Linechart suga */}
          <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 20, padding: 10 }}>
            <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.subTitle, color: colors.blue }}>กราฟวัดน้ำตาลในเลือด</Text>
            <LineChart
              data={sugaService}
              width={width * 90 / 100}
              height={220}
              chartConfig={chartConfig}
              bezier
            />
            
              <Botton
                text='วัดค่า'
                textStyle={{
                  alignSelf:'center'
                }}
                containerStyle={{
                  paddingHorizontal: 16,
                  marginTop: 20,
                  flexDirection: 'column',
                  alignSelf:'center',
                  alignItems:'center',
                  justifyContent:'center',
                  width:220
                }}
                activeOpacity={0.75}
                onPress={() => { }}
              >
              </Botton>
        
            </View>

            {/* Linechart Ketone */}
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginVertical: 5, padding: 10 }}>
            <Text style={{ fontFamily: fontFamily.bold, fontSize: fontSize.subTitle, color: colors.blue }}>กราฟวัดคีโตน</Text>
            <LineChart
              data={sugaService}
              width={width * 90 / 100}
              height={220}
              chartConfig={chartConfig}
              bezier
            />
            
              <Botton
                text='วัดค่า'
                textStyle={{
                  alignSelf:'center'
                }}
                containerStyle={{
                  paddingHorizontal: 16,
                  marginTop: 20,
                  flexDirection: 'column',
                  alignSelf:'center',
                  alignItems:'center',
                  justifyContent:'center',
                  width:220,
                  marginBottom:40
                }}
                activeOpacity={0.75}
                onPress={() => { }}
              >
              </Botton>
        
            </View>





          </View>
      </ScrollView>
    </SafeAreaView>

  )
}

export default Home;

const styles = StyleSheet.create({
  Imageheader: {
    width: 80,
    height: 80,
    borderRadius: 40,

  }
})