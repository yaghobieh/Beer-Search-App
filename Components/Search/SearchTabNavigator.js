import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';
import SearchTab from './TabNavigator/SearchTab';
import FavoriteTab from './TabNavigator/FavoriteTab';

const SearchTabNavigator = TabNavigator({
    SearchTab: { screen: SearchTab },
    FavoriteTab: { screen: FavoriteTab } 
},{
    tabBarPosition: 'bottom',
    tabBarComponent: props => {
        return(
           <Footer>
               <FooterTab>
                    <Button vertical active={props.navigationState.index === 0} 
                    onPress={ () => props.navigation.navigate('SearchTab') }>
                       <Icon name="star" /><Text>Search</Text>
                    </Button>
                    <Button vertical active={props.navigationState.index === 1}
                    onPress={ () => props.navigation.navigate('FavoriteTab') }>
                        <Icon name="star" /><Text>Favorite</Text>
                    </Button>
               </FooterTab>
           </Footer> 
        )
    }
});

export default SearchTabNavigator;

