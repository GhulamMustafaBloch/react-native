import {ScrollView, StyleSheet, Text, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://api.alquran.cloud/v1/surah`).then((response) => {
            setData(response.data.data);
            console.log(response.data.data)
        })
    }, []);
    return(
        <View>
            <ScrollView>
            {
                data.length ? <View>
                    {
                        data.map((surahs)=>{
                            const {name,number} = surahs
                            return(
                                <View style={styles.surahContainer}>
                                    <Text style={styles.surahsText}>{name}</Text>
                                    <Text style={styles.surahsText}>{number}</Text>
                                </View>
                            )
                        }
                        )
                    }
                </View>:
                <Text>data is lodding...</Text>
            }
            </ScrollView>
        </View>
    )
}

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
        direction: "rtl",
    },
    surahsText:{
        color: "white",
        fontSize: 20,
    }
})
