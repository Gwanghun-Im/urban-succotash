// OS의 상단 바
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize: 28,
        color:'#999999'}}
      >
        Hello! I made a RN App!
      </Text>
      <StatusBar style="inverted" />
    </View>
  );
}
// StyleSheet.create로 autocomplete를 사용할 수 있다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    color:'#999999'
  }
});
const styles2 = {
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  }
};