import React from 'react';
import { StyleSheet, View, Text, Keyboard } from 'react-native';
import { Container, Content } from 'native-base';
import axios from 'axios';
import SearchHeader from '../SearchHeader';
import SearchBody from '../SearchBody';
 
export default class SearchTab extends React.Component {
    static navigationOptions = {
        header: null
    }

    state = {
        searchBear: '',
        searchData: {},
        bearFlag: false
    }

    bearSearch = () => {
        Keyboard.dismiss();
        const bearName = this.state.searchBear;
        // const query = 'http://api.brewerydb.com/v2/search?q=' +bearName+ '&type=beer&key=2e79681b46666b733ef24a940bc7e85';
        const query='https://jsonplaceholder.typicode.com/posts/' +bearName;

        axios.get(query)
            .then( (res) => {
                if(res.data){
                    this.setState({
                        searchData: res.data,
                        bearFlag: true
                    });
                } 
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    bearFlag: false
                });
            });
    }

    renderContent = () => {
        if(this.state.bearFlag) {
            return <SearchBody bearDate={this.state.searchData} />
        } else {
            console.log('Not found');
        }
    }

    render() {
        return (
            <Container>
                <SearchHeader 
                value={this.state.searchBear} 
                onChangeText={ (searchBear) => { this.setState({searchBear}) } } 
                bearSearch={this.bearSearch} />

                <Content>
                    {this.renderContent()}
                </Content>
            </Container>
        )
    }
}