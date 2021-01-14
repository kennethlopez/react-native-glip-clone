import {StyleSheet, View} from "react-native";
import React from "react";
import {Button, Dialog, Paragraph, Portal} from "react-native-paper";
import {Colors} from "../../styles";

type Props = {
    state: [boolean, (visible: boolean) => void],
    title: string;
    message: string;
    doneActionText: string;
    onDonePress: () => void;
}

const BasicDialog: React.FC<Props> = ({state, title, message, doneActionText, onDonePress}) => {
    const [visible, setVisible] = state;

    const hideDialog = () => setVisible(false);

    return (
        <View>
            <Portal>
                <Dialog visible={visible} onDismiss={hideDialog}>
                    <Dialog.Title style={styles.title}>{title}</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{message}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={hideDialog}>Cancel</Button>
                        <Button onPress={() => {
                            onDonePress();
                            hideDialog();
                        }}>{doneActionText}</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    );
}

const styles = StyleSheet.create({
   title: {
       color: Colors.PRIMARY
   }
});

export default BasicDialog;
