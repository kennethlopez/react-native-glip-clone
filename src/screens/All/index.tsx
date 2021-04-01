import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Menu} from "react-native-paper";
import {AppStyle, Colors, Mixins} from "../../styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const AllScreen: React.FC = () => {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const selectedFilter = 'All conversations';

    return (
        <>
            <View style={styles.container}>
                <View style={styles.filterContainer}>
                    <Menu
                        style={styles.filterMenu}
                        contentStyle={styles.filterMenuContent}
                        visible={visible}
                        onDismiss={closeMenu}
                        anchor={
                            <View>
                                <Button
                                    labelStyle={styles.filterAnchorLabel}
                                    color={Colors.GRAY_DARK}
                                    onPress={openMenu}
                                >
                                    Show: {selectedFilter + "  "}
                                    <MaterialCommunityIcons
                                        name='filter'
                                        color={Colors.GRAY_DARK}
                                        size={18}
                                    />
                                </Button>
                            </View>
                        }
                    >
                        <Menu.Item titleStyle={styles.menuItemTitle} style={{...styles.menuItem,...styles.menuSelected}} onPress={() => {}} title="All conversations" />
                        <Menu.Item titleStyle={styles.menuItemTitle} style={styles.menuItem} onPress={() => {}} title="Unread" />
                        <Menu.Item titleStyle={styles.menuItemTitle} style={styles.menuItem} onPress={() => {}} title="Unread @mentions" />
                        <Menu.Item titleStyle={styles.menuItemTitle} style={styles.menuItem} onPress={() => {}} title="Draft" />
                        <Menu.Item titleStyle={styles.menuItemTitle} style={styles.menuItem} onPress={() => {}} title="Failed" />
                    </Menu>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    filterContainer: {
        flexDirection: "row-reverse",
        backgroundColor: Colors.WHITE,
        elevation: 2,
    },
    filterMenu: {
        marginTop: -13,
        marginLeft: 8,
        // right: 0,
    },
    filterMenuContent: {
        paddingTop: 0,
        paddingBottom: 0,
    },
    filterAnchorLabel: {
        ...AppStyle.buttonLabel,
        fontSize: 14,
        ...Mixins.padding(4, 0, 4, 0)
    },
    menuItem: {
        paddingRight: 88,
    },
    menuItemTitle: {
        fontSize: 14,
    },
    menuSelected: {
        backgroundColor: Colors.GRAY_LIGHT
    }
})

export default AllScreen;
