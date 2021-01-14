import React, {useRef, useState} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import {Colors} from "./styles";
import HomeScreen from "./screens/Home";
import SignInScreen from "./screens/SignIn";
import {StatusBar} from "react-native";
import SplashScreen from "./screens/Splash";
import DrawerStackScreen from "./screens/Drawer";
import {UserProfileContextProp} from "./types";

const RootStack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.PRIMARY,
        accent: Colors.SECONDARY
    }
}

export const UserProfileContext: React.Context<UserProfileContextProp> = React.createContext({});

export default function App() {
    const [userProfile, setUserProfile] = useState({});

    return (
        <PaperProvider theme={theme}>
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
