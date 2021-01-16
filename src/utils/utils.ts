import * as NetInfo from '@react-native-community/netinfo'
import {NetInfoState} from "@react-native-community/netinfo";

export const checkConnectivity = (): Promise<NetInfoState> => {
    return new Promise<NetInfoState>((resolve, reject) => {
        NetInfo.fetch()
            .then((netInfoState) => {
                if (netInfoState) {
                    resolve(netInfoState)
                    // reject(netInfoState);
                } else {
                    reject(netInfoState);
                }
            });
    });
}
