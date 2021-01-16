import React from "react";
import {View} from "react-native";
import {ActivityIndicator, Dialog, Paragraph, Portal} from "react-native-paper";

type Props = {
    visible: boolean;
}

const LoadingDialog: React.FC<Props> = ({visible}) => {
    return (
        <View>
            <Portal>
                <Dialog visible={visible}>
                    <Dialog.Content>
                        <Paragraph>
                            <ActivityIndicator animating={true} />
                            {'  '}Please wait...
                        </Paragraph>
                    </Dialog.Content>
                </Dialog>
            </Portal>
        </View>
    );
}

export default LoadingDialog;
