import {LocalStorage} from ".";

export const signOut = (navigation: any) => {
    LocalStorage.setUser(null)
        .then(() => {
            navigation.navigate('Home');
        })
        .catch(e => {
            console.log('problem signing out: ', e);
        });
}
