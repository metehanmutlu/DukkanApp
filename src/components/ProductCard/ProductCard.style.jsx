import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#cfcfcf',
        borderColor: '#bdbdbd',
        borderWidth: 1,
        margin: 10,
        flexDirection: 'row',
        borderRadius: 10,
    },
    bodyContainer: {
        flex: 1,
        padding: 5,
        justifyContent: 'space-between'
    },
    image: {
        width: 100,
        minHeight: 100,
        resizeMode: 'contain',
        backgroundColor: 'white',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black'
    },
    price: {
        textAlign: 'right',
        fontSize: 16,
        fontStyle: 'italic'
    },
})