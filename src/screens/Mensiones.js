import React, { Component } from 'react'
import MentionItem from './mentionItem'
import { View, Text, ActivityIndicator, Pressable, StyleSheet, FlatList } from 'react-native'
import { Informacion } from './Informacion'

class Mensiones extends Component {
    state = {
        tweets: Informacion,
        allTweets: [],
        loading: false
    }

    //Api rest
    componentDidMount = () => {
        console.log(this.state.tweets)
    }

    render() {
        const { tweets, loading } = this.state;
        return (
            <View style={styles.container}>
                {loading ?
                    <ActivityIndicator color="#00a2f3"
                        size="large" style={styles.loader} />
                    : null
                }
                <FlatList
                    data={tweets}
                    renderItem={({ item }) =>
                        <MentionItem item={item} />
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
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
    }
});
export default Mensiones