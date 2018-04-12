import React from 'react';
import { StyleSheet, View, Text, ListView } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content , ListItem} from 'native-base';

var data = [];
var currentUser;

export default class FavoriteTab extends React.Component {
    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) =>  r1 !== r2 });
        this.state = {
            listViewData: data
        }
    }

    static navigationOptions = {
        header: null
    }

    getFavorites = async() => {
        currentUser = await firebase.auth().currentUser;
        var that = this;
        firebase.database().ref(currentUser.uid).child('favorites').on('child_added', function(data){
            var newData = [... that.state.listViewData];
            newData.push(data);
            that.setState({listViewData: newData});
        })
    }

    componentDidMount() {
        this.getFavorites()
    }

    render() {
        return (
            <Container style={{flex: 1, backgroundColor: 'white'}}>
                <Content 
                    enableEmptySection 
                    DataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow = { data => 
                        <ListItem >
                            <Text>{data.val().name}</Text>
                        </ListItem>
                     }
                >

                </Content>
            </Container>
        )
    }
}