import React from "react";
import {Text} from "react-native-paper";
import {StatusBar, StyleSheet, View} from "react-native";
import {AppStyle, Colors} from "../../styles";

const MainTabs: React.FC = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={Colors.GRAY_LIGHTER} barStyle='dark-content' />
            <Text>MainTabs</Text>
        </View>
    );
}

const styles = StyleSheet.create({
   container: {
       ...AppStyle.container,
       justifyContent: "flex-start"
   }
});

export default MainTabs;
