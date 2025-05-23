import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    eventName: {
        color: '#FDFCFE',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    evenDate: {
        color: '#6B6B6B',
        fontSize:16
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        color: '#FFF',
        padding: 16,
        fontSize:16,
        marginRight: 12  
    },
    textButton: {
        color: '#FFF',
        fontSize: 24
    },
    Button: {
        height: 56,
        width: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42 
    },
    listEmptyText:{
        color: '#FFF',
        fontSize: 14,
        alignItems: 'center'
    }
})