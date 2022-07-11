import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        flex: 1
    },
    bodyContainer: {
        padding: 10
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ratingContainer: {
        // alignItems: 'center',
    },
    rate: {
        fontSize: 22,
        color: 'green',
        fontWeight: 'bold',
    },
    image: {
        width: deviceSize.width,
        height: deviceSize.height / 3,
        resizeMode: 'contain',
        backgroundColor: 'white'
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 24
    },
    desc: {
        fontStyle: 'italic',
        marginVertical: 5,
        fontSize: 16
    },
    price: {
        fontWeight: 'bold',
        fontSize: 22,
        textAlign: 'right',
        color: 'black',
        fontStyle: 'italic'
    },
    stars: {
        flexDirection: 'row'
    },
    star: {
        color: 'green',
        fontSize: 18,
        padding: 1
    }
})