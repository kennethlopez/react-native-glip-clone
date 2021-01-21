import * as Colors from './colors';
import * as Mixins from './mixins';

import {StyleSheet} from "react-native";
import {DefaultTheme} from "react-native-paper";

const AppStyle =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        justifyContent: "center",
    },
    buttonLabel: {
        textTransform: "none",
    },
    errorMessage: {
        color: 'red',
        fontSize: 13
    },
    appBar: {
        backgroundColor: Colors.WHITE
    },
    textInput: {
        backgroundColor: Colors.WHITE
    }
});

const TabStyle = {
    tabBarOptions: {
        activeTintColor: Colors.PRIMARY,
        inactiveTintColor: Colors.GRAY_DARK,
        labelStyle: {
            fontSize: 12
        },
        keyboardHidesTabBar: true,
    }
}

const AppTheme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.PRIMARY,
        accent: Colors.SECONDARY
    }
}


export {Colors, AppStyle, Mixins, TabStyle, AppTheme};
