import React, {useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {AppStyle, TabStyle} from "../../styles";
import MessageScreen from "../Message";
import VideoScreen from "../Video";
import ContactsScreen from "../Contacts";
import {Appbar} from "react-native-paper";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
    const navigation = useNavigation();

    const defaultTab = 'Message';
    const [selectedTab, setSelectedTab] = useState(defaultTab);
    let titleContent = null;
    let rightContent = null;
    switch (selectedTab) {
        case 'Message':
            titleContent = <Appbar.Content title='Message' />;
            rightContent = (
                <>
                    <Appbar.Action icon='magnify' onPress={() => {}} />
                    <Appbar.Action icon='dots-vertical' onPress={() => {}} />
                </>
            );
            break
        case 'Video':
            titleContent = <Appbar.Content title='Video' />;
            rightContent = (
                <>
                    <Appbar.Action icon='dots-vertical' onPress={() => {}} />
                </>
            );
            break;
        case 'Contacts':
            titleContent = null;
            break;
    }

    return (
        <>
            <Appbar style={AppStyle.appBar}>
                <Appbar.Action icon='menu' onPress={() => {navigation.dispatch(DrawerActions.openDrawer)}} />
                {titleContent}
                {rightContent}
            </Appbar>
            <Tab.Navigator
                initialRouteName={defaultTab}
                backBehavior='none'
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let icon = '';

                        switch (route.name) {
                            default:
                            case 'Message':
                                icon = 'message-text';
                                break;
                            case 'Video':
                                icon = 'video';
                                break;
                            case 'Contacts':
                                icon = 'contacts'
                                break;
                        }

                        return <Icon name={icon} size={size} color={color} />
                    }
                })}

                tabBarOptions={TabStyle.tabBarOptions}
            >
                <Tab.Screen
                    name='Message'
                    component={MessageScreen}
                    listeners={() => ({
                        tabPress: (_) => {
                            setSelectedTab('Message');
                        }
                    })}
                />
                <Tab.Screen
                    name='Video'
                    component={VideoScreen}
                    listeners={() => ({
                        tabPress: (_) => {
                            setSelectedTab('Video');
                        }
                    })}
                />
                <Tab.Screen
                    name='Contacts'
                    component={ContactsScreen}
                    listeners={() => ({
                        tabPress: (_) => {
                            setSelectedTab('Contacts');
                        }
                    })}
                />
            </Tab.Navigator>
        </>
    );
}

export default MainTabs;
