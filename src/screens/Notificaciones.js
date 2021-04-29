import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Informacion } from './Informacion'
import TweetItem from './Tweet'
import Mensiones from './Mensiones'
import { Azul } from '../utils/Color'

import { Container, Tab, Tabs } from 'native-base';


class Todas extends Component {
    state = {
        tweets: Informacion
    }
    render() {
        const { tweets } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    data={tweets}
                    renderItem={({ item }) =>
                        <TweetItem item={item} />
                    }
                />
            </View>
        )
    }
}

class Notificaciones extends Component {

    render() {
        return (
            <Container>
                <Tabs>
                    <Tab heading="Todas"
                        tabStyle={{ backgroundColor: 'white' }}
                        activeTabStyle={{ backgroundColor: Azul }}
                    >
                        <Todas />
                    </Tab>
                    <Tab heading="Menciones"
                        tabStyle={{ backgroundColor: 'white' }}
                        activeTabStyle={{ backgroundColor: Azul }}
                    >
                        <Mensiones />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default Notificaciones

const styles = StyleSheet.create({
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
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});