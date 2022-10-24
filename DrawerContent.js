import React from "react";
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import react from "react";
export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = react.useState(false)
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }
    return (

        <View style={{ flex: 1 }}>
            <DrawerContentScrollView >
                <View style={styles.drawerContent} >

                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image source={require('./assets/jack.png')}
                                size={50}
                            />

                            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                <Title style={styles.title}>
                                    Jack Frost
                                </Title>
                                <Caption style={styles.caption}>
                                    @jackfrost07
                                </Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>2</Paragraph>
                                <Caption style={styles.caption}> Donations</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>10</Paragraph>
                                <Caption style={styles.caption}>Blood Requests</Caption>
                            </View>
                        </View>

                    </View>

                    <Drawer.Section style={styles.DrawerItem}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Login"
                            onPress={() => { props.navigation.navigate("Login") }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Donors"
                            onPress={() => { props.navigation.navigate("Donors") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Request a Blood"
                            onPress={() => { props.navigation.navigate("Request A Blood") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="bookmark-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Blood Requests"
                            onPress={() => { props.navigation.navigate("Blood Requests") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="material-ui"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Camps"
                            onPress={() => { props.navigation.navigate("Camps") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-check-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => { props.navigation.navigate("Support") }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="exit-to-app"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings"
                            onPress={() => { props.navigation.navigate("Settings") }}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => { toggleTheme() }}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme} />
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>


                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection} >

                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => { signOut() }}
                />

            </Drawer.Section>
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

});

