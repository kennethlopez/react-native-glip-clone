import React, {useEffect} from "react";
import {BackHandler, Keyboard, StyleSheet, TextInput, View} from "react-native";
import {Appbar} from "react-native-paper";
import {DrawerActions, useNavigation} from "@react-navigation/native";
import {AppStyle, Colors} from "../../styles";

type Props = {
    searchTextState: [string, React.Dispatch<React.SetStateAction<string>>];
    searchInputFocusedState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const ContactsAppBar: React.FC<Props> = ({searchTextState, searchInputFocusedState}) => {
    const navigation = useNavigation();

    const [searchText, setSearchText] = searchTextState;
    const [searchInputFocused, setSearchInputFocused] = searchInputFocusedState;

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
        <Appbar style={styles.appBar}>
            <View style={searchBarStyle}>
                <Appbar.Action
                    icon={searchInputFocused ? 'arrow-left' : 'menu'}
                    color={Colors.GRAY_DARKER}
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
                    placeholderTextColor={Colors.GRAY_DARK}
                    onBlur={() => setSearchInputFocused(false)}
                    onFocus={() => setSearchInputFocused(true)}
                    value={searchText}
                    onChangeText={setSearchText}
                />
                {searchText.length > 0 && <Appbar.Action icon='close' color={Colors.GRAY_DARKER} onPress={emptySearchText} />}
            </View>
        </Appbar>
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

export default ContactsAppBar;
