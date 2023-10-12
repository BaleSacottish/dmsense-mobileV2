import { View, Text, Dimensions, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get('window')
const QuestionItem = ({ data, selectedOption }) => {
    return (
        <View style={{ width: width }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{
                    color: '#0F7FAB',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginBottom: 20,

                }}>{data.question}</Text>
            </View>

            {/* <FlatList
                data={data.Options}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity
                            style={{
                                width: '90%',
                                height: 50,
                                elevation: 3,
                                backgroundColor: data.marked == index + 1 ? 'red' : '#fff', 
                                marginBottom: 10,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                paddingLeft: 15,
                                
                            }} onPress={() => {
                                selectedOption(index + 1)
                            }}>
                            <Text style={{
                                textAlign: 'left',
                                fontWeight: '700',
                                fontSize: 16,
                                width: 150,
                                color: "#0F7FAB"
                            }}> {item} </Text>
                        </TouchableOpacity>
                    )
                }} /> */}
        </View>
    )
}

export default QuestionItem