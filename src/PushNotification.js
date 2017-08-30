import React, { Component } from "react";

import { Platform } from 'react-native';

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

export default class PushNotification extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        FCM.requestPermissions();

        FCM.getFCMToken().then(token => {
        console.log("TOKEN (getFCMToken)", token);
        });

        FCM.getInitialNotification().then(notif => {
            console.log("INITIAL NOTIFICATION", notif)
        });

        this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
        console.log("Notification", notif);
        if(notif.local_notification){
            console.log("local")
            //return;
        }
        if(notif.opened_from_tray){
            console.log("Tray")
            //return;
        }

        
        this.showLocalNotification(notif);
        });

        this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
            console.log("TOKEN (refreshUnsubscribe)", token);
        });
    }

    showLocalNotification = (notif) => {
        FCM.presentLocalNotification({
            title: notif.title,
            body: notif.body,
            priority: "high",
            click_action: notif.click_action,
            show_in_foreground: true,
            local: true
        });
    }

    componentWillUnmount() {
        this.notificationListener.remove();
        this.refreshTokenListener.remove();
    }


    render() {
        return null;
    }
}