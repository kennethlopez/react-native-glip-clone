import React from "react";
import DrawerContent from "../../components/DrawerContent";
import MainTabs from "../MainTabs";
import {createDrawerNavigator} from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const DrawerStackScreen: React.FC = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props}/>}
            initialRouteName="MainTabs"
        >
            <Drawer.Screen
                name='MainTabs'
                component={MainTabs}
            />
        </Drawer.Navigator>
    );
}

export default DrawerStackScreen;
