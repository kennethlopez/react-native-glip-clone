import React, {useState} from "react";
import {useIsFocused} from "@react-navigation/native";
import {FAB, Portal} from "react-native-paper";
import {Colors} from "../../styles";
import Icon from "react-native-vector-icons/MaterialIcons";
import {StyleSheet} from "react-native";

type FabState = {
    open: boolean;
}

const MessageTabFabGroup: React.FC = () => {
    const [fabState, setFabState] = useState({open: false});
    const screenFocused = useIsFocused();
    const {open} = fabState;

    const onFabStateChange = ({open}: FabState) => setFabState({open});

    return (
        <>
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
    )
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

export default MessageTabFabGroup;
