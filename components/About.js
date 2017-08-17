import React from 'react'

import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'


export default class App extends React.Component {


    render() {

        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi </Text>
                <Text>Je suis entrain d'etudier ReactNative sur graphikart </Text>
            </View>
        );
    }
}


const style = StyleSheet.create({
    title : {
      fontSize: 22,
      marginBottom: 20,
      color: '#7fffd4' 
    },

    view: {
        margin: 20
    }
});