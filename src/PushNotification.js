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

        this.notificationListener  = FCM.on(FCMEvent.Notification, async (notif) => {
        console.log("Notification", notif);
        if(notif.local_notification){
            console.log("local")
            //return;
        }

        if (notif.fcm) {
                console.log(notif.fcm)
                   this.title = notif.fcm.title
                   this.body = notif.fcm.body
            
                   this.sendLocalNotification(this.title, this.body)
        }

        
        });

        this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, token => {
            console.log("TOKEN (refreshUnsubscribe)", token);
        });
    }

    sendLocalNotification = (head, main) => {
        FCM.presentLocalNotification({
            title: head,
            body: main,
            priority: "high",
            show_in_foreground: true,
            picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
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