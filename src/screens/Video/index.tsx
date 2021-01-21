import React from "react";
import {Appbar, Text} from "react-native-paper";
import {AppStyle} from "../../styles";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const VideoScreen: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <Appbar style={AppStyle.appBar}>
                <Appbar.Action icon='menu' onPress={() => navigation.dispatch(DrawerActions.openDrawer)} />
                <Appbar.Content title='Video' />
                <Appbar.Action icon='dots-vertical' onPress={() => {}} />
            </Appbar>
            <Text>Video</Text>
        </>
    );
}

export default VideoScreen;
