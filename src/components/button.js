import { Text, View, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { fontSize, fontFamily} from '../contants/fonts';
import colors from '../contants/colors';
import globalStyles from '../contants/globalStyles';

/**
 * @param {Object} props
 * @param {JSX.Element} props.children
 * @param {ViewStyle} props.containerStyle
 * @param {number} props.activeOpacity
 * @param {string} props.text
 * @param {boolean} props.disabled
 * @param {string} props.textColor
 * @param {TextStyle} props.textStyle
 * @param {() => void} props.onPress
 */

const Botton = ({
  containerStyle,
  activeOpacity,
  children,
  text,
  disabled = false,
  textColor,
  textStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      disabled={disabled}
      style={{
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        backgroundColor: colors.blue,
        borderRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 12,
        ...globalStyles.shadow_5,
        ...containerStyle,
      }}
      onPress={() =>{
        onPress? onPress() : null 
      }}
    >
      {
        text ? (
          <Text
            style={{
              
              fontFamily: fontFamily.bold,
              fontSize: fontSize.subTitle,
              color: textColor || colors.pink,
              ...textStyle
            }}>
            {text}
          </Text>
        ) : null
      }
      {children}
    </TouchableOpacity>
  )
}

export default Botton;