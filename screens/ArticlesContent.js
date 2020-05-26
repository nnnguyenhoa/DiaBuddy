import React, {PureComponent} from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';
import {Card} from '@paraboly/react-native-card';
import Firebase from '../config/Firebase';

export default class ArticlesContent extends PureComponent {
  state = {
    currUser: Firebase.auth().currentUser.uid,
    pokeList: [],
    loading: true,
    first: '',
    second: '',
    third: '',
  };

  getRandom(arr, n) {
    var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
    if (n > len) {
      throw new RangeError('getRandom: more elements taken than available');
    }
    while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
  }

  async fetchArticles() {
    let firstArticleList = [];
    let secondArticleList = [];
    let thirdArticleList = [];
    let displayArticleList = [];

    await Firebase.database()
      .ref('/users/' + this.state.currUser + '/Tags/MostAsked')
      .once('value', snapshot => {
        this.setState({
          first: snapshot.val().First,
          second: snapshot.val().Second,
          third: snapshot.val().Third,
        });
      });

    const firstArticles = Firebase.database().ref(
      'Articles/' + this.state.first,
    );
    const secondArticles = Firebase.database().ref(
      'Articles/' + this.state.second,
    );
    const thirdArticles = Firebase.database().ref(
      'Articles/' + this.state.third,
    );

    // Fetch all articles from the three tag categories
    await firstArticles.once('value', snapshot => {
      snapshot.forEach(child => {
        firstArticleList.push({
          Title: child.val().Title,
          Description: child.val().Description,
          Link: child.val().Link,
        });
      });
    });

    await secondArticles.once('value', snapshot => {
      snapshot.forEach(child => {
        secondArticleList.push({
          Title: child.val().Title,
          Description: child.val().Description,
          Link: child.val().Link,
        });
      });
    });

    await thirdArticles.once('value', snapshot => {
      snapshot.forEach(child => {
        thirdArticleList.push({
          Title: child.val().Title,
          Description: child.val().Description,
          Link: child.val().Link,
        });
      });
    });

    let t1 = this.getRandom(firstArticleList, 5);
    let t2 = this.getRandom(secondArticleList, 3)
    let t3 = this.getRandom(thirdArticleList, 2)
    for (const el in t1) {
      displayArticleList.push(t1[el]);
    }

    for (const el in t2) {
      displayArticleList.push(t2[el]);
    }

    for (const el in t3) {
      displayArticleList.push(t3[el]);
    }
    this.setState({pokeList: displayArticleList, loading: false})

  }
  //Define your componentDidMount lifecycle hook that will retrieve data.
  //Also have the async keyword to indicate that it is asynchronous.
  async componentDidMount() {
    try {
      this.fetchArticles();
    } catch (err) {
      console.log('Error fetching data-----------', err);
    }
  }
  //Define your renderItem method the callback for the FlatList for rendering each item, and pass data as a argument.
  renderItem(data) {
    const link = data.item.Link;
    return (
      <TouchableOpacity
        style={{backgroundColor: 'transparent'}}
        onPress={() => {
          Linking.openURL(link);
        }}>
        <View style={styles.listItemContainer}>
          <Card
            iconDisable
            title={data.item.Title}
            content={data.item.Description}
            onPress={() => {
              Linking.openURL(link);
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    //Destruct pokeList and Loading from state.
    const {pokeList, loading} = this.state;
    if (!loading) {
      return (
        <FlatList
          data={pokeList}
          renderItem={this.renderItem}
          keyExtractor={item => item.name}
        />
      );
    } else {
      return <ActivityIndicator />;
    }
  }
}

//import styleSheet for creating a css abstraction.
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItemContainer: {
    borderStyle: 'solid',
    borderColor: '#3caffa',
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
