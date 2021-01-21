import React, {useState} from "react";
import {Appbar, FAB, Portal, Text} from "react-native-paper";
import {AppStyle, Colors} from "../../styles";
import {DrawerActions, useIsFocused, useNavigation} from "@react-navigation/native";
import {StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type FabState = {
    open: boolean;
}

const MessageScreen: React.FC = () => {
    const navigation = useNavigation();

    const [fabState, setFabState] = useState({open: false});
    const screenFocused = useIsFocused();
    const {open} = fabState;

    const onFabStateChange = ({open}: FabState) => setFabState({open});

    return (
        <>
            <Appbar style={AppStyle.appBar}>
                <Appbar.Action icon='menu' onPress={() => navigation.dispatch(DrawerActions.openDrawer)} />
                <Appbar.Content title='Message' />
                <Appbar.Action icon='magnify' onPress={() => {}} />
                <Appbar.Action icon='dots-vertical' onPress={() => {}} />
            </Appbar>
            <Text>Message</Text>
            <Portal theme={theme}>
                <FAB.Group
                    style={styles.fabGroup}
                    visible={screenFocused}
                    open={open}
                    fabStyle={styles.fab}
                    icon={open ? 'close' : 'plus'}
                    actions={[
                        {
                            icon: 'svg',
                            label: 'Create team',
                            onPress: () => console.log('create team'),
                            color: Colors.PRIMARY
                        },
                        {
                            icon: ({color, size}) => (
                                <Icon
                                    name='person'
                                    color={color}
                                    size={size}
                                />
                            ),
                            label: 'Invite',
                            onPress: () => console.log('invite'),
                            color: Colors.PRIMARY
                        },
                        {
                            icon: 'tooltip',
                            label: 'New message',
                            onPress: () => console.log('new message'),
                            color: Colors.PRIMARY
                        }
                    ]}
                    onStateChange={onFabStateChange}
                />
            </Portal>
        </>
    );
}

const styles = StyleSheet.create({
    fabGroup: {
        paddingBottom: 48,
    },
    fab: {
        backgroundColor: Colors.PRIMARY
    }
});

const theme = {
    colors: {
        backdrop: 'rgba(255, 255, 255, 0.7)'
    },
}

export default MessageScreen;
