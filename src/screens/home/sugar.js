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
import React, { useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack'
import { fontFamily, fontSize } from '../../contants/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign'

import globalStyles from '../../contants/globalStyles';
import Botton from '../../components/button';

import Page1 from './sugar/page1';
import Page2 from './sugar/page2';
import Page3 from './sugar/page3';

import colors from '../../contants/colors';
import Header from '../../components/header';


const { height } = Dimensions.get('screen');

/**
 * @typedef {object} IPage1
 */

/**
 * @typedef {object} IPage2
 */


const sugar = ({ navigation, route }) => {

  const [pageIndex, setPageIndex] = useState(0);
  const [dataPage1, setDataPage1] = useState('initPage1');
  const [dataPage2, setDataPage2] = useState('initPage2');
  const [dataPage3, setDataPage3] = useState('initPage2');

  /**
   * 
   * @param {object} changed 
   * @param {1|2|3|4} page 
   */

  const onChanged = (changed, page) => {
    switch (page) {
      case 1: {
        let dataPage = dataPage1;
        dataPage[Object.keys(changed)[0]] = Object.values(changed)[0];

        setDataPage1({ ...dataPage })
        break;
      }
      case 2: {
        let dataPage = dataPage2;
        dataPage[Object.keys(changed)[0]] = Object.values(changed)[0];

        setDataPage2({ ...dataPage })
        break;
      }
    }
  }


  const RenderPage = () => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingHorizontal: 36, paddingVertical: 24 }}>
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
      </View>
    )
  }






  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 1, height: height - 240, backgroundColor: colors.pink_2, }}>
        <ScrollView>
          <RenderPage />
          <View
            style={{
              ...globalStyles.welcome_padding,
            }}>
            
            
            {
              pageIndex == 0 ? (
                <Page1 value={dataPage1} onChanged={(value) => onChanged(value, 1)} />
              ) :
                pageIndex == 1 ? (
                  <Page2 value={dataPage2} onChanged={(value) => onChanged(value, 2)} />
                ) :
                  pageIndex == 2 ? (
                    <Page3 value={dataPage3} onChanged={(value) => onChanged(value, 3)} />
                  ) : null

            }
           
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  tab_page: {
    width: '23.5%',
    backgroundColor: '#FFF',
    height: 12,
    borderRadius: 24,
  }
})

export default sugar