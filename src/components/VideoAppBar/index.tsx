import React from "react";
import {AppStyle, Colors} from "../../styles";
import {Appbar} from "react-native-paper";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const VideoAppBar: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <Appbar style={AppStyle.appBar}>
                <Appbar.Action icon='menu' color={Colors.GRAY_DARKER} onPress={() => navigation.dispatch(DrawerActions.openDrawer)} />
                <Appbar.Content title='Video' titleStyle={{color: Colors.GRAY_DARKER}} />
                <Appbar.Action icon='dots-vertical' color={Colors.GRAY_DARKER} onPress={() => {}} />
            </Appbar>
        </>
    );
}

export default VideoAppBar;
