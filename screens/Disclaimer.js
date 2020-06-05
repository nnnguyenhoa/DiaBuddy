import React from 'react';
import {
  Image,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Button,
  ImageBackground,
} from 'react-native';

class Disclaimer extends React.Component {
	render() {
	    return (
	    	<View  style={styles.foundation}>
		    	<View style={styles.header} />
		    	<Image source={require('../assets/disclaimer.png')} style={styles.imageBack} />
		    	<View style={styles.header}>
		    		<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
						<Text style={styles.buttonText}>I understand.</Text>
					</TouchableOpacity>
		    	</View>
			</View>
    	);
  	}
}



// 
const styles = StyleSheet.create({
  foundation: {
    flex: 1,
	},
  header: {
  	flex: 1,
  	alignItems: 'center',
    justifyContent: 'center',
  },
  imageBack: {
  	flex: 2,
  	backgroundColor: '#fff',
    height: null,
    resizeMode: 'contain',
    width: null,
  },
  button: {
    marginTop: 30,
    marginBottom: 20,
    paddingVertical: 5,
    alignItems: 'center',
    backgroundColor: '#3caffa',
    borderColor: '#3caffa',
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Disclaimer;