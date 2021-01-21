import React, {useState} from "react";
import {Dialog, Portal, Text} from "react-native-paper";
import {Keyboard, View} from "react-native";
import ContactsAppBar from "../../components/ContactsAppBar";

const ContactsScreen: React.FC = () => {
    const [searchInputFocused, setSearchInputFocused] = useState(false);
    const [searchText, setSearchText] = useState('');

    const dismissKeyboard = () => Keyboard.dismiss();

    return (
        <>
            <ContactsAppBar
                searchTextState={[searchText, setSearchText]}
                searchInputFocusedState={[searchInputFocused, setSearchInputFocused]}
            />
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

export default ContactsScreen;
