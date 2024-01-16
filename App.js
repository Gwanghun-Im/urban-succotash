// OS의 상단 바
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {
  const [city, setCity] = useState("Loading....");
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async () => {
    const { granted } = await Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setOk(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    console.log(location);
    setCity(location[0].city);
  };
  useEffect(() => {
    ask();
  }, []);
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator="false"
        contentContainerStyle={style.weather}
      >
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.desc}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.desc}>Sunny</Text>
        </View>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.desc}>Sunny</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  city: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 58,
    fontWeight: "500",
  },
  weather: {},
  day: {
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  temp: {
    marginTop: 10,
    fontWeight: "600",
    fontSize: 178,
  },
  desc: {
    fontSize: 100,
  },
});

// 레이아웃에서 width와 height를 숫자로 설정하지 않는다
// 대신, flex를 사용한다.
