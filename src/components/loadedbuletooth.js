import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import * as Progress from 'react-native-progress';

const Loadedbuletooth = () => {

    return (
        <View>
            <Progress.Bar progress={0.5} width={200} />
        </View>
    )
}

export default Loadedbuletooth;

const styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100,
    },
});
