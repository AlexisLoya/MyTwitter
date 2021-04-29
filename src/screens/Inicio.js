import React, { Component } from 'react'
import { View, Text, ActivityIndicator, Pressable, StyleSheet, FlatList } from 'react-native'
import { Avatar } from 'react-native-paper';
import TweetItem from './Tweet'
import {Informacion} from './Informacion'


class Inicio extends Component {
    state = {
        tweets: Informacion,
    }

    render() {
        const { tweets } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={tweets}
                    renderItem={({ item }) =>
                       <TweetItem item={item}/>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    titleText: {
        color: "#000",
        textAlign: "center",
        fontSize: 20
    },
    btn: {
        padding: 8,
        backgroundColor: "green",
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    },
    loader: {
        marginTop: 60
    },
    fleets: {
        marginTop: 5,
        marginBottom: 15,
        marginLeft: 5,
        marginRight: 5,
    }
})

export default Inicio
