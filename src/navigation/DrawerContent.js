import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Icon } from 'native-base';
import { Azul } from '../utils/Color'

export function DrawerContent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://pbs.twimg.com/profile_images/1107499827917656064/OotAmKIk_400x400.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Disablent Frame bot</Title>
                                <Caption style={styles.caption}>@LasterLG117</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>325</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>58</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <Drawer.Item
                            style={styles.drawerItem}
                            label="Perfil"
                            icon={() => (
                                <FontAwesome
                                    name='user-o'
                                    size={20}
                                    color="rgb(136, 153, 166)" />
                            )}
                            onPress={() => { props.navigation.navigate('Perfil') }}
                        />
                        <Drawer.Item
                            label="Inicio"
                            style={styles.drawerItem}
                            icon={() => (
                                <FontAwesome
                                    name='home'
                                    size={20}
                                    color="rgb(136, 153, 166)" />
                            )}
                            onPress={() => { props.navigation.navigate('Inicio') }}
                        />
                        <Drawer.Item
                            label="Elementos guardados"
                            style={styles.drawerItem}
                            icon={() => (
                                <FontAwesome
                                    name='bookmark-o'
                                    size={20}
                                    color="rgb(136, 153, 166)" />
                            )}
                            onPress={() => { alert("Elementos guardados") }}
                        />
                        <Drawer.Item
                            label="Momentos"
                            style={styles.drawerItem}
                            icon={() => (
                                <FontAwesome
                                    name='flash'
                                    size={20}
                                    color="rgb(136, 153, 166)" />
                            )}
                            onPress={() => { alert("Momentos") }}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    label="Ajustes y privacidad"
                    icon={() => (
                        <Icon
                            name="qrcode"
                            style={{
                                color: Azul,
                                fontSize: 20,
                                marginRight: -20,
                            }}
                            type="AntDesign"
                        />
                    )}
                    onPress={() => { alert("Ajustes y privacidad") }}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 20,
    },
    drawerItem: {
        marginBottom: 10,
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
    icon: {
        position: "absolute",
        left: 20,
        top: 10
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },

})