import React, {useContext} from "react";
import {View} from "react-native";
import {DrawerContentComponentProps, DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import {Avatar, Caption, Text, Title} from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "./styles";
import {Colors} from "../../styles";
import {UserProfileContext} from "../../index";

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    const {userProfile} = useContext(UserProfileContext);
    console.log("userProfile: ", userProfile);

    return (
        <View style={styles.container}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.userDetailsContainer}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://avatars0.githubusercontent.com/u/11627301?s=400&u=7172b05e75d2525e4b1045eedf9010abcd806060&v=4'
                                }}
                                size={60}
                            />
                            <View style={styles.userDetailsTitleContainer}>
                                <Title style={styles.title}>Sam Paul</Title>
                                <Caption style={styles.caption}>@sampaul</Caption>

                                <View style={styles.statusContainer}>
                                    <Caption style={styles.caption}>Offline</Caption>
                                    <Ionicons
                                        name='ios-pencil-sharp'
                                        style={styles.statusIcon}
                                    />
                                </View>
                            </View>
                        </View>

                        <DrawerItem
                            style={styles.drawerItem}
                            icon={({color, size}) => (
                                <Ionicons
                                    name='ios-happy'
                                    color={color}
                                    size={size}
                                    style={styles.drawerIcon}
                                />
                            )}
                            label=""
                            onPress={() => {}}
                        />
                    </View>

                    <View style={styles.divider}/>

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <Ionicons
                                name='ios-checkbox'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Tasks"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <MaterialIcons
                                name='event'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Team events"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        label={() => (
                            <View style={styles.cutomizeTabsContainer}>
                                <Text style={styles.customizeTabsLabel}>Customize tabs</Text>
                                <View style={styles.customizeTabsIconContainer}>
                                    <Ionicons
                                        name='ios-chevron-forward'
                                        color={Colors.GRAY_DARKER}
                                        size={18}
                                        style={styles.customizeTabsIcon}
                                    />
                                </View>
                            </View>
                        )}
                        onPress={() => {}}
                    />

                    <View style={styles.divider}/>

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <Ionicons
                                name='ios-settings-sharp'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Settings"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <MaterialIcons
                                name='new-releases'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="What's new"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <Ionicons
                                name='ios-help-circle'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Help and feedback"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                    <DrawerItem
                        style={styles.drawerItem}
                        icon={({color, size}) => (
                            <MaterialIcons
                                name='exit-to-app'
                                color={color}
                                size={size}
                                style={styles.drawerIcon}
                            />
                        )}
                        label="Sign out"
                        labelStyle={styles.drawerLabel}
                        onPress={() => {}}
                    />

                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerContent;
