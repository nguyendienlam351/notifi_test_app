
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission()
    const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL

    if (enabled) {
        console.log('Authorization status:', authStatus)
        getFCMToken()
    }
}

const getFCMToken = async () => {
    let fcmtoken = await AsyncStorage.getItem('fcmtoken')
    console.log('old token', fcmtoken)

    // new token is created if fcmtoken is null
    if (!fcmtoken) {
        try {
            let fcmtoken = await messaging().getToken()

            if (fcmtoken) {
                console.log('new token', fcmtoken)
                await AsyncStorage.setItem('fcmtoken', fcmtoken)
            }

        } catch (error) {

        }
    }
}

export const notificationListener = (navigation) => {
    // If app is background
    messaging().onNotificationOpenedApp(remoteMessage => {
        if (remoteMessage) {
            const { type, content } = remoteMessage.data
            navigation.current.navigate(type, { content: content })
        }
    });

    // If app is quit
    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            if (remoteMessage) {
                const { type, content } = remoteMessage.data
                navigation.current.navigate(type, { content: content })
            }
        });

    // If app is openning
    messaging().onMessage(async remoteMessage => {
        if (remoteMessage) {
            const { type, content } = remoteMessage.data
            navigation.current.navigate(type, { content: content })
        }
    })
}