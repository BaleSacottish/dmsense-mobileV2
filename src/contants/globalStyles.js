import { StyleSheet } from 'react-native'

const globalStyles = StyleSheet.create({
    welcome_padding: {
        flex: 1,
        paddingHorizontal: 32,
        paddingVertical: 32,
        backgroundColor:'#F6F5FA',
        padding:10
    },

    screen_padding: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 24,
    },

    //Shadow
    shadow_2: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,
    },
    shadow_5: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})

export default globalStyles;