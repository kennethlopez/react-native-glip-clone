import React from "react";
import {createMaterialTopTabNavigator, MaterialTopTabBarOptions} from "@react-navigation/material-top-tabs";
import MessageTabFabGroup from "../../components/MessageTabFabGroup";
import MessageAppBar from "../../components/MessageAppBar";
import {TabStyle} from "../../styles";
import AllScreen from "../All";
import DirectScreen from "../Direct";
import TeamsScreen from "../Teams";
import FavoritesScreen from "../Favorites";

const Tab = createMaterialTopTabNavigator();

const tabBarOptions: MaterialTopTabBarOptions = {
    ...TabStyle.tabBarOptions,
    labelStyle: {
        textTransform: 'none',
        fontSize: 14,
        fontWeight: "bold",
        letterSpacing: 0.5,
    },
    scrollEnabled: true
}

const MessageScreen: React.FC = () => {
    return (
        <>
            <MessageAppBar />
            <Tab.Navigator tabBarOptions={tabBarOptions}>
                <Tab.Screen name='All' component={AllScreen} />
                <Tab.Screen name='Direct' component={DirectScreen} />
                <Tab.Screen name='Teams' component={TeamsScreen} />
                <Tab.Screen name='Favorites' component={FavoritesScreen} />
            </Tab.Navigator>
            <MessageTabFabGroup />
        </>
    );
}

export default MessageScreen;
