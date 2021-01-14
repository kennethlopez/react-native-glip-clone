import { RouteProp } from "@react-navigation/native";
import {UserProfile} from "../../api/types";
import {RootStackParamList} from "../../types";

export type DrawerParams = {
    userProfile?: UserProfile
}

type DrawerScreenRouteProp = RouteProp<RootStackParamList, 'Drawer'>

export type Props = {
    route: DrawerScreenRouteProp;
}
