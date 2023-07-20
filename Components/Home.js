import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/homeStyles";

export default function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.alquran.cloud/v1/quran/ar.alafasy`)
      .then((response) => {
        setData(response.data.data.surahs);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <ScrollView>
        {data.length ? (
          <View>
            {data.map((surah, index) => {
              const { name, number, ayahs } = surah;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    props.navigation.navigate("About", { SurahText: ayahs });
                  }}
                >
                  <View style={styles.surahContainer}>
                    <Text style={styles.surahsText}>{name}</Text>
                    <Text style={styles.surahsText}>{number}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : (
          <Text>data is loading...</Text>
        )}
      </ScrollView>
    </View>
  );
}
