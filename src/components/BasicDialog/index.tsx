import {StyleSheet, View} from "react-native";
import React from "react";
import {Button, Dialog, Paragraph, Portal} from "react-native-paper";
import {AppStyle, Colors} from "../../styles";

type Props = {
    visible: boolean;
    title: string;
    message: string;
    onDismiss: () => void;
    negativeButtonText?: string;
    positiveButtonText?: string;
    onNegativeButtonPress?: () => void;
    onPositiveButtonPress?: () => void;
}

const BasicDialog: React.FC<Props> = ({
        visible,
        title,
        message,
        onDismiss,
        negativeButtonText,
        positiveButtonText,
        onNegativeButtonPress,
        onPositiveButtonPress,
    }) => {

    return (
        <View>
            <Portal>
                <Dialog visible={visible} onDismiss={onDismiss}>
                    <Dialog.Title style={styles.title}>{title}</Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>{message}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        {negativeButtonText && <Button labelStyle={AppStyle.buttonLabel} onPress={onNegativeButtonPress}>{negativeButtonText}</Button>}
                        {positiveButtonText && <Button labelStyle={AppStyle.buttonLabel} onPress={onPositiveButtonPress}>{positiveButtonText}</Button>}
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
