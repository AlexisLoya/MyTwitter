import React from 'react';
import { View, StyleSheet, Image, Platform, Pressable } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Container, Header, Content, Tab, Tabs } from 'native-base';


const MentionItem = ({ item }) => {
    const avatarUSer = item.avatar
    return (
        <View style={styles.drawerContent}>
            <Content style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: avatarUSer
                        }}
                        size={50}
                    />
                    <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Title style={styles.title}>{item.name}</Title>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.caption], [{ marginTop: 9, color: "gray" }]}>{item.date}</Text>
                                <Ionicons name='ios-ellipsis-vertical' style={[styles.added],
                                    [{ alignItems: 'flex-end', marginTop: 12 }]} />

                            </View>

                        </View>
                        <Caption style={styles.caption}>{item.username}</Caption>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.section}>
                        <Text style={[styles.text], [{
                            color: '#00a2f3'
                        }]}>{item.mention} </Text>
                        <Text style={styles.text}>{item.message}</Text>
                    </View>
                </View>
                <View style={styles.icons}>
                    <Ionicons name='chatbubble-outline' style={{ fontSize: 20, color: "gray" }} />
                    <Ionicons name='git-compare-outline' style={{ fontSize: 20, color: "gray" }} />
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons name='heart-sharp' style={{ fontSize: 20, color: "red" }} />
                        <Text style={[styles.caption], [{ marginTop: 1, marginLeft: 2 }]}>1</Text>
                    </View>
                    <Ionicons name='ios-share-social-outline' style={{ fontSize: 20, color: "gray" }} />

                </View>
            </Content>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
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
    added: {
        marginTop: 12,
        fontSize: 12,
        color: "gray",
    }
});
export default MentionItem
