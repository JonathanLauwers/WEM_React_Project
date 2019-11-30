import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { RoomList } from './src/pages/RoomList';
import { RoomDetail } from './src/pages/RoomDetail';

export default function App() {

  const Stack = createStackNavigator({
    Home: {
      screen: RoomList
    },
    Room: {
      screen: RoomDetail
    }
  });

  const AppContainer = createAppContainer(Stack);

  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center'
  }
});