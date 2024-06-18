import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>A button that alert "Hello"!</Text>
      <Button color='orange'
              title='Button' 
              onPress={() => alert("Hello!")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
