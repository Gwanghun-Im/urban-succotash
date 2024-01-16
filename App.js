// OS의 상단 바
import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex:1, backgroundColor: 'tomato'}}></View>
        <View style={{ flex:2, backgroundColor: 'teal'}}></View>
        <View style={{ flex:1, backgroundColor: 'orange'}}></View>
      </View>
      <View style={{ flex: 1, flexDirection:'row' }}>
        <View style={{ flex:1, backgroundColor: 'tomato'}}></View>
      </View>
    </View>
  );
}

// 레이아웃에서 width와 height를 숫자로 설정하지 않는다
// 대신, flex를 사용한다.