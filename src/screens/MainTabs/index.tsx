import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {TabStyle} from "../../styles";
import MessageScreen from "../Message";
import VideoScreen from "../Video";
import ContactsScreen from "../Contacts";

const Tab = createBottomTabNavigator();

const MainTabs: React.FC = () => {
    return (
        <>
            <Tab.Navigator
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
                />
                <Tab.Screen
                    name='Video'
                    component={VideoScreen}
                />
                <Tab.Screen
                    name='Contacts'
                    component={ContactsScreen}
                />
            </Tab.Navigator>
        </>
    );
}

export default MainTabs;
