import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { Avatar, Title, Caption, Text } from 'react-native-paper'

const MensajesDirectos = ({ item }) => {
    const avatar = item.avatar
    return (
        <View style={styles.drawerContent}>
            <Pressable onPress={() => alert(`chat individual de ${item.name}
            \n Mensaje: ${item.message}`)}>

                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Avatar.Image source={{ uri: avatar }} size={50} />
                        <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Title style={styles.title}>{item.name}</Title>
                                <View style={{ flexDirection: 'row' }}>
                                    <Caption style={[styles.caption], [{ marginTop: 8, marginRight: 10 }]}>{item.username}</Caption>
                                    <Text style={[styles.caption], [{ marginTop: 9, color: "gray" }]}>{item.date}</Text>
                                </View>

                            </View>
                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Text style={styles.text}>{item.message}</Text>
                                </View>
                            </View>
                        </View>
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
            </Pressable>
        </View>
    )
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
        marginTop: 0,
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

})
export default MensajesDirectos
