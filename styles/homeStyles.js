import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    surahContainer:{
        paddingHorizontal: 20,
        marginVertical:5,
        marginHorizontal:40,
        backgroundColor: "green",
        flex: 1,
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "space-between",
        height: 60,
        borderRadius:5,
        writingDirection: "ltr",
    },
    mainContainer:{
        backgroundColor: "green"
    },
    textContainer:{
        borderBottomWidth: 2,
        borderColor: "#fff",
        padding: 15,
    },
    surahsText:{
        color: "white",
        fontSize: 20,
    },
    qurqnText:{
        fontSize: 15,
        color: "#fff",
        lineHeight: 30,
        textAlign: "center"
    }
})


export default styles;