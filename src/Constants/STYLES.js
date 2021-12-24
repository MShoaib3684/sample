import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        // backgroundColor: "yellow",
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height

    },
    textfont19gibson454F63: {
        fontSize: 19,
        color: '#454F63',
        //  fontFamily:'gibson' semibold
    },
    textfont19gibsonwhite: {
        fontSize: 19,
        color: '#FFFFFF',
        //backgroundColor: "#78849E",
        // color: 'rgba(0,0,0,0.38)',

    },
    textfont16gibsonorange: {
        fontSize: 16,
        color: '#454F63',
        //backgroundColor: "#78849E",
        // color: 'rgba(0,0,0,0.38)',

    },
    textfont16gibson78849E: {
        fontSize: 16,
        color: '#78849E',
        //  fontFamily:'gibson' semibold
    },
    textfont16gibsonwhite: {
        fontSize: 16,
        color: '#FFFFFF',
        //backgroundColor: "#78849E",
        // color: 'rgba(0,0,0,0.38)',

    },
    giftedchathumanbeingimagestyle: {
        height: 40, width: 40,
        borderRadius: 20
    },

});




export default STYLES;