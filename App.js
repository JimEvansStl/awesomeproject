import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ColorBox from './components/ColorBox';
import { SafeAreaView } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
//import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>


      </Stack.Navigator>

    </NavigationContainer>

  );
}



