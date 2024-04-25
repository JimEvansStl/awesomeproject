import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Here are some boxes of difference colors</Text> 
      <ColorBox colorName="Cyan" hexCode="#2aa198"/> 
      <ColorBox colorName="Blue" hexCode="#268bd2"/> 
      <ColorBox colorName="Magenta" hexCode="#d33682"/> 
      <ColorBox colorName="Orange" hexCode="#cb4b16"/> 
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
