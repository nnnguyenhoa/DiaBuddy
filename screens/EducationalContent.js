import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {CardList} from 'react-native-card-list';

const cards = [
  {
    id: '0',
    title: 'Dummy Title 1',
    picture: require('../assets/background.jpg'),
    content: <Text>Starry Night</Text>,
  },
  {
    id: '1',
    title: 'Dummy Title 2',
    picture: require('../assets/background.jpg'),
    content: <Text>Wheat Field with Cypresses</Text>,
  },
  {
    id: '2',
    title: 'Dummy Title 3',
    picture: require('../assets/background.jpg'),
    content: <Text>Bedroom in Arles</Text>,
  },
];

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <CardList cards={cards} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
