import {StyleSheet} from "react-native";
import {Colors, Mixins} from "../../styles";

export default StyleSheet.create({
    container: {
        flex: 1
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        marginTop: -4,
        backgroundColor: Colors.GRAY_LIGHTER
    },
    userDetailsContainer: {
        ...Mixins.padding(16, 16, 8, 16),
        flexDirection: 'row',
    },
    imageEdit: {
        marginTop: -18,
        backgroundColor: Colors.BLACK,
        color: Colors.WHITE,
        opacity: 0.5
    },
    userDetailsTitleContainer: {
        flex: 1,
        flexDirection: 'column',
        ...Mixins.margin(-10, 0, 0, 16),
    },
    title: {
        fontSize: 16,
        fontWeight: '100'
    },
    caption: {
        fontSize: 12,
        marginTop: -10
    },
    bottomDrawerSection: {
        marginBottom: 16,
        borderTopColor: Colors.GRAY_LIGHT,
        borderTopWidth: 1,
    },
    drawerItem: {
        ...Mixins.margin(0, 0, 0, 0),
        borderRadius: 0,
    },
    drawerIcon: {
        ...Mixins.margin(0, 0, 0, 8)
    },
    divider: {
        height: 1.5,
        backgroundColor: Colors.GRAY_LIGHT
    },
    statusContainer: {
        ...Mixins.margin(16, 0, 0, 0),
        flexDirection: 'row',
    },
    statusIcon: {
        ...Mixins.margin(-4, 0, 0, 8)
    },
    drawerLabel: {
        fontWeight: "bold",
        color: Colors.GRAY_DARKER
    },
    cutomizeTabsContainer: {
        flex: 1,
        flexDirection: "row",
        paddingLeft: 64,
    },
    customizeTabsLabel: {
        fontWeight: "bold",
        color: Colors.GRAY_DARKER
    },
    customizeTabsIcon: {
        alignSelf: "flex-end"
    },
    customizeTabsIconContainer: {
        flex: 1,
        marginRight: -16
    }
});
