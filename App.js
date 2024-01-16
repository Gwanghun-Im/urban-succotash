// OS의 상단 바
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={style.container}>
      <View style={style.city}>
        <Text style={style.cityName}>Seoul</Text>
      </View>
      <View style={style.weather}>
        <View style={style.day}>
          <Text style={style.temp}>27</Text>
          <Text style={style.desc}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'tomato'
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    'alignItems': 'center'
  },
  cityName: {
    fontSize: 68,
    fontWeight: 500
  },
  weather: {
    flex: 2
  },
  day: {
    flex: 2,
    alignItems: 'center',
  },
  temp: {
    marginTop: 10,
    fontSize: 178,
  },
  desc: {
    fontSize: 100
  },

})

// 레이아웃에서 width와 height를 숫자로 설정하지 않는다
// 대신, flex를 사용한다.