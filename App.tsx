import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
interface ButtonProps{
  title: String
}
function Button (props: ButtonProps){
  return(
    <TouchableOpacity>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  )
}
export default function App() {
  return (
    <View style={styles.container}>

      <Button title="Clique 1" />
      <Button title="Clique 2" />
      <Button title="Clique 3" />
      <Button title="Hello World" />

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
