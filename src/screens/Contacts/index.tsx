import React, {useEffect, useState} from "react";
import {Appbar, Dialog, Portal, Text} from "react-native-paper";
import {AppStyle, Colors} from "../../styles";
import {BackHandler, Keyboard, StyleSheet, TextInput, View} from "react-native";
import {DrawerActions, useNavigation} from "@react-navigation/native";

const ContactsScreen: React.FC = () => {
    const navigation = useNavigation();
    const [searchInputFocused, setSearchInputFocused] = useState(false);
    const [searchText, setSearchText] = useState('');

    const searchBarStyle = searchInputFocused ?
        {...styles.searchBarContainer, ...styles.searchBarFocused} :
        {...styles.searchBarContainer, ...styles.searchBarUnfocused};

    const dismissKeyboard = () => Keyboard.dismiss();
    const emptySearchText = () => setSearchText('');

    useEffect(() => {
        const backAction = () => {
            if (searchInputFocused) {
                dismissKeyboard();

                // prevent default back action to be executed
                return true;
            }

            return false;
        }

        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);

    return (
        <>
            <Appbar style={styles.appBar}>
                <View style={searchBarStyle}>
                    <Appbar.Action
                        icon={searchInputFocused ? 'arrow-left' : 'menu'}
                        onPress={() => {
                            if (searchInputFocused) {
                                dismissKeyboard();
                            } else {
                                navigation.dispatch(DrawerActions.openDrawer)
                            }
                        }}
                    />
                    <TextInput
                        placeholder='Search company contacts'
                        selectionColor={Colors.PRIMARY}
                        style={styles.searchInput}
                        onBlur={() => setSearchInputFocused(false)}
                        onFocus={() => setSearchInputFocused(true)}
                        value={searchText}
                        onChangeText={setSearchText}
                    />
                    {searchText.length > 0 && <Appbar.Action icon='close' onPress={emptySearchText} />}
                </View>
            </Appbar>
            <View style={{flex: 1}}>
                <Portal.Host>
                    <Text>Contacts</Text>
                    <Portal>
                        <Dialog visible={searchInputFocused && searchText.length == 0} onDismiss={dismissKeyboard}>
                        </Dialog>
                    </Portal>
                </Portal.Host>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    searchBarUnfocused: {
        backgroundColor: Colors.GRAY_LIGHTER,
    },
    searchBarFocused: {
        backgroundColor: Colors.WHITE,
    },
    searchBarContainer: {
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        fontSize: 16
    },
    appBar: {
        ...AppStyle.appBar,
        elevation: 0,
    }
})


export default ContactsScreen;
