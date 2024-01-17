// OS의 상단 바
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const API_KEY = "b6b9f81fafc2a905b6266380e8430e3c";

export default function App() {
  const [city, setCity] = useState("Loading....");
  const [days, setDays] = useState([]);
  const [ok, setOk] = useState(true);
  const getWeather = async () => {
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
    setCity(location[0].city);

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setDays(json.daily);
  };
  useEffect(() => {
    getWeather();
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
        {days.length === 0 ? (
          <View style={style.day}>
            <ActivityIndicator color={"white"} size={"large"} />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={style.day}>
              <Text style={style.temp}>
                {parseFloat(day.temp.day).toFixed(1)}
              </Text>
              <Text style={style.desc}>{day.weather[0].main}</Text>
            </View>
          ))
        )}
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
