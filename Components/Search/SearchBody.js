import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Content, ListItem } from 'native-base';
import * as firebase from 'firebase';

export default class SearchBody extends React.Component {
    addToFav = async(title) => {
        currentUser = await firebase.auth().currentUser;
        var databaseRef = await firebase.database().ref(currentUser.uid).child('favorites').push();
        databaseRef.set({
            'name' : title
        })
    }

    render() {
        return (

            <Content>
                <ListItem itemDivider>
                    <Text>Id:</Text>
                </ListItem>
                <ListItem style={{backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View>
                        <Text>{this.props.bearDate.id}</Text>
                    </View>
                    <View>
                        <Button onPress={ () => this.addToFav(this.props.bearDate.title) } title="+ Favorite"></Button>
                    </View>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Title:</Text>
                </ListItem>
                <ListItem style={{backgroundColor: 'white'}}>
                    <Text>{this.props.bearDate.title}</Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text>Info:</Text>
                </ListItem>
                <ListItem style={{backgroundColor: 'white'}}>
                    <Text>{this.props.bearDate.body}</Text>
                </ListItem>
            </Content>
        )
    }
}