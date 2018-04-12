import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Header, Icon, Item, Input } from 'native-base';

export default class SearchHeader extends React.Component {

    render() {
        return (
            <Header searchBar rounded style={{height: 80}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input 
                    placeholder="Enter bear name" 
                    returnKeyType="search" 
                    onChangeText={this.props.onChangeText} 
                    onSubmitEditing={this.props.bearSearch} />
                </Item>
            </Header>
        )
    }
}