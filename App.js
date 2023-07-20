import { StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from './Components/Home';
import About from './Components/About';
export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="Al Quran" component={Home} />
        <stack.Screen name="About" component={About} />
      </stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
});
