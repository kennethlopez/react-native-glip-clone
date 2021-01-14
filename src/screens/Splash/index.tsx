import React, {useContext, useEffect} from "react";
import {StatusBar, View} from "react-native";
import {AppStyle, Colors} from "../../styles";
import {ActivityIndicator} from "react-native-paper";
import {LocalStorage} from "../../utils";
import { useNavigation } from "@react-navigation/native";
import fakeApi from "../../api";
import {UserProfileContext} from "../../index";

const SplashScreen: React.FC = () => {
    const navigation = useNavigation();
    const {setUserProfile} = useContext(UserProfileContext);
    useEffect(() => {
        LocalStorage.getUser()
            .then((user) => {
                if (user) { // user is logged in
                    fakeApi.getUserProfile(user)
                        .then((profile) => {
                            // saves the user profile into context, this will allow other screens to access the user profile
                            setUserProfile(profile);

                            navigation.reset({
                                index: 0,
                                routes: [{name: 'Drawer'}]
                            });
                        })
                        .catch(e => {
                            console.log('error fetching user profile: ', e);
                        })
                } else {
                    navigation.reset({
                        index: 0,
                        routes: [{name: 'Home'}]
                    });
                }
            });
    }, []);

    return (
        <View style={AppStyle.container}>
            <StatusBar backgroundColor={Colors.WHITE} barStyle='dark-content' />
            <ActivityIndicator
                size='large'
                animating={true}
                color={Colors.PRIMARY}
            />
        </View>
    );
}

export default SplashScreen;
