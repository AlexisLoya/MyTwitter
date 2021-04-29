import React from 'react';
import { View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { Avatar, Title, Caption, Text, } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const TweetItem = ({ item }) => {
    const avatar = item.avatar
    const [comment, setCommnet] = React.useState(false)
    const [retweet, setRetweet] = React.useState(false)
    const [fav, setFav] = React.useState(false)
    const [share, setShare] = React.useState(false)
    return (
        <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image source={{ uri: avatar }} size={50} />
                    <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Title style={styles.title}>{item.name}</Title>
                        </View>
                        <Caption style={styles.caption}>{item.username}</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.section}>
                        <Text style={styles.text}>{item.tweet}</Text>
                    </View>
                </View>
                <View style={styles.icons}>
                    <TouchableOpacity
                        onPress={() => setCommnet(!comment)}
                    >
                        <FontAwesome
                            style={styles.icon}
                            name='commenting-o'
                            size={22}
                            color={comment ? "rgb(27, 246, 27)" : "rgb(136, 153, 166)"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setRetweet(!retweet)}
                    >
                        <FontAwesome
                            style={styles.icon}
                            name='retweet'
                            size={20}
                            color={retweet ? "rgb(27, 246, 27)" : "rgb(136, 153, 166)"} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setFav(!fav)}
                    >
                        <FontAwesome
                            style={styles.icon}
                            name='heart-o'
                            size={20}
                            color={fav ? "rgb(246, 63, 27)" : "rgb(136, 153, 166)"} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setShare(!share)}
                    >
                        <FontAwesome
                            style={styles.icon}
                            name='share-alt'
                            size={20}
                            color={share ? "rgb(27, 246, 27)" : "rgb(136, 153, 166)"} />

                    </TouchableOpacity>
                </View>
            </View>
            <View
                style={{
                    borderBottomColor: 'rgb(211,211,211)',
                    borderBottomWidth: 1,
                    marginTop: 10,
                    marginEnd: 5

                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    text: {
        textAlign: 'left',
        justifyContent: 'center',
        marginBottom: 10,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
        paddingRight: 10,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        marginBottom: 0,
        fontWeight: 'bold',
    },
    caption: {
        marginLeft: 0,
        marginTop: 0,
        fontSize: 11,
        lineHeight: 12,
    },
    row: {
        marginTop: 10,
        flexDirection: 'column-reverse',
        alignItems: 'flex-start',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginRight: 0,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
})


export default TweetItem
