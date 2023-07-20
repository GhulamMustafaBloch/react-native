import {View, Text, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {useRoute} from "@react-navigation/native";
import styles from "../styles/homeStyles";

const About = () => {
    const route = useRoute();
    const [surahText, setSurahText] = useState([]);

    useEffect(() => {
        if (route.params && route.params.SurahText) {
            setSurahText(route.params.SurahText);
        }
    }, [route.params]);

    if (surahText.length === 0) {
        return <Text>Loading...</Text>;
    }

    return (
        <ScrollView style={styles.mainContainer}>
            <View>
                {surahText.map((item, index) => (
                    <View style={styles.textContainer} key={index}>
                        <Text style={styles.qurqnText}>{item.text}</Text>
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

export default About;
