import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import { Avatar } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import TweetItem from './Tweet'
import { Informacion } from './Informacion'
import { Container, Header, Content, Tab, Tabs } from 'native-base';

class ProfileScreen extends Component {
    state = {
        tweets: Informacion,
    }
    render() {
        const { tweets } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.goback}>
                    <Image style={styles.portada} source={{
                        uri: 'https://pbs.twimg.com/profile_banners/2595698653/1616345930/1500x500'
                    }} />
                    <View style={styles.edit}>
                        <Avatar.Image
                            source={{
                                uri: 'https://pbs.twimg.com/profile_images/1107499827917656064/OotAmKIk_400x400.png'
                            }}
                            size={70}
                            style={styles.perfil}
                        />
                    </View>
                    <View style={styles.top}>
                        <Text style={styles.userName}>Disable Frame </Text>
                        <Text style={styles.userHandle}>@LasterLG117 </Text>
                        <Text style={styles.description}>You're the reason I, I feel this way </Text>

                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name='pin-sharp' style={{ marginTop: 5, fontSize: 12, color: "red" }} />
                            <Text style={[styles.caption]}>Fecha de nacimiento: 27 de junio de 2001</Text>
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <Ionicons name='calendar-sharp' style={{ marginTop: 5, fontSize: 10, color: "grey" }} />
                            <Text style={[styles.caption]}>Se unió en junio de 2014</Text>
                        </View>

                        <View>
                            <Text style={styles.followingCount}>300
                                <Text style={styles.followingText}> Following</Text>
                            </Text>
                            <Text style={styles.followersCount}>1,320
                                <Text style={styles.followersText}> Followers</Text>
                            </Text>
                        </View>

                    </View>
                </View>
                <Container>
                    <Tabs
                        style={{ alignItems: 'center' }}
                    >
                        <Tab heading="Tweets"
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={{ backgroundColor: "#00a2f3" }}
                        >
                            <FlatList
                                data={tweets}
                                renderItem={({ item }) =>
                                    <TweetItem item={item} />
                                }
                            />
                        </Tab>
                        <Tab heading="Tweets & Replies"
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={{ backgroundColor: "#00a2f3" }}
                        >
                            <FlatList
                                data={tweets}
                                renderItem={({ item }) =>
                                    <TweetItem item={item} />
                                }
                            />
                        </Tab>
                        <Tab heading="Media"
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={{ backgroundColor: "#00a2f3" }}
                        >
                            <FlatList
                                data={tweets}
                                renderItem={({ item }) =>
                                    <TweetItem item={item} />
                                }
                            />
                        </Tab>
                        <Tab heading="Likes"
                            tabStyle={{ backgroundColor: 'white' }}
                            activeTabStyle={{ backgroundColor: "#00a2f3" }}
                        >
                            <FlatList
                                data={tweets}
                                renderItem={({ item }) =>
                                    <TweetItem item={item} />
                                }
                            />
                        </Tab>
                    </Tabs>
                </Container>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    followersText: {
        color: "#000",
        fontWeight: "300"
    },
    firstList: {
        marginTop: 0,
        borderTopWidth: 0.3,
        borderTopColor: 'black',
        height: 60,
        borderTopWidth: 0.3,
        borderTopColor: 'black'
    },
    icon: {
        position: "absolute",
        left: 20,
        top: 10
    },
    portada: {
        width: '100%',
        height: 100,
        marginTop: 0,
        marginLeft: 0,
        paddingLeft: 0,
    },
    perfil: {
        marginLeft: 10,
        marginTop: -30,
    },
    goback: {
        marginBottom: 0
    },
    edit: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginLeft: 10
    },
    caption: {
        color: 'gray',
        marginTop: 1,
        marginLeft: 2
    },
    banerIcon: {
        marginTop: 5,
        fontSize: 10,
        color: "grey"
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 0
    },
    row: {
        flexDirection: "row"
    },
    list: {
        padding: 10,
        height: 20,
        borderColor: 'red',
        borderWidth: 0
    },
    text: {
        position: "absolute",
        left: "24%",
        top: 10,
        color: "#000",
        fontSize: 16
    },
    top: {
        paddingBottom: 10,
        paddingLeft: 30,
        marginBottom: 5,
        marginTop: -15,
        marginBottom: 10,
    },
    photo: {
        width: 50,
        height: 50,
        borderRadius: 30,
        marginTop: 20
    },
    userName: {
        marginTop: 15,
        color: "#000",
        fontWeight: "bold"
    },
    userHandle: {
        marginTop: 5,
        color: "#000",
        fontWeight: "300"
    },
    description: {
        marginTop: 5,
        color: "#000",
        fontWeight: "300"
    },
    followingCount: {
        fontWeight: 'bold',
        marginRight: 10
    },
    followingText: {
        color: "#000",
        fontWeight: "300"
    },
    followersCount: {
        color: "#000",
        position: 'absolute',
        right: 30,
        top: 10,
        fontWeight: "bold"
    },

})
export default ProfileScreen