import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';

var background = require('../../assets/homeScreen.jpg');

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        firebase.auth().signInWithEmailAndPassword('yaghobieh@gmail.com', 'jfalcon132456');
    }

    render() {
        return (
            <View style={styles.HomeScreen}>
                <View style={{position: 'absolute', left: 0, top: 0, height: '100%', width: '100%'}}>
                    <Image source={background} style={{flex: 2, height: null, width: null }} />
                </View>

                <Button primary block 
                onPress={ () => this.props.navigation.navigate('SearchTabNavigator') }>
                    <Text style={{color: 'white'}}>Search Bears</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HomeScreen: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})
