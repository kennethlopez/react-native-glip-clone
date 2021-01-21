import React, {useRef} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider as PaperProvider} from 'react-native-paper';
import {Colors, AppTheme} from "./styles";
import HomeScreen from "./screens/Home";
import SignInScreen from "./screens/SignIn";
import {StatusBar} from "react-native";
import SplashScreen from "./screens/Splash";
import DrawerStackScreen from "./screens/Drawer";
import {UserProfileContextProp} from "./types";
import {UserProfile} from "./api/types";

const RootStack = createStackNavigator();

export const UserProfileContext = React.createContext<UserProfileContextProp>({
    setUserProfile: (_) => {}
});

export default function App() {
    const userProfile: React.MutableRefObject<UserProfile | null> = useRef(null);
    const setUserProfile = (profile: UserProfile | null) => {
        userProfile.current = profile;
    }

    return (
        <PaperProvider theme={AppTheme}>
            <UserProfileContext.Provider value={{userProfile, setUserProfile}}>
                <NavigationContainer>
                    <StatusBar backgroundColor={Colors.GRAY_LIGHTER} barStyle='dark-content' />
                    <RootStack.Navigator headerMode='none'>
                        <RootStack.Screen
                            name='SplashScreen'
                            component={SplashScreen}
                        />
                        <RootStack.Screen
                            name="Drawer"
                            component={DrawerStackScreen}
                        />
                        <RootStack.Screen
                            name='Home'
                            component={HomeScreen}
                        />
                        <RootStack.Screen
                            name='SignIn'
                            component={SignInScreen}
                        />
                    </RootStack.Navigator>
                </NavigationContainer>
            </UserProfileContext.Provider>
        </PaperProvider>
    );
}
