import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'; 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to my react native app!!</Text>
        <Button title="My Button" icon= {{ name: 'code'}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
