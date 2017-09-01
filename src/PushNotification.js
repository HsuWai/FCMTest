import React, { Component } from "react";

import { Platform, Text, View } from 'react-native';

import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";
import { GetNotification } from './actions'
import { connect } from 'react-redux'
import { AsyncStorage } from 'react-native'


let notiType1Count = 0;
let notiType2Count = 0;

class PushNotification extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            notiCount: 0
        }
    }

    componentWillReceiveProps(nextProps){

    }

    componentDidMount() {
        
        FCM.requestPermissions();

        FCM.getFCMToken().then(token => {
        console.log("TOKEN (getFCMToken)", token);
        });

        FCM.getInitialNotification().then(notif => {
            console.log("INITIAL NOTIFICATION", notif)
        });
        FCM.subscribeToTopic('/topics/foo-bar');
        this.notificationListener  = FCM.on(FCMEvent.Notification, async (notif) => {
        console.log("Notification", notif);
        if(notif.local_notification){
            console.log("local")
            return;
        }
        if(notif.opened_from_tray){
            //app is open/resumed because user clicked banner
            console.log("tray")
            return;
        }

        if (notif.fcm) {
            console.log(notif.fcm)
            this.title = notif.fcm.title
            this.body = notif.fcm.body
            if(notif.noti_type === 'Type1'){
                notiType1Count = notiType1Count +1;
                this.props.GetNotification(notiType1Count)
                //AsyncStorage.setItem('notiCount', notiType1Count)
                
                console.log("Type 1 : "+ notiType1Count)
            }
            
            if(notif.noti_type === 'Type2'){
                notiType2Count = notiType2Count + 1;
                console.log("Type 2 : "+ notiType2Count)
                this.props.GetNotification(notiType1Count)
            }
            
            this.sendLocalNotification(this.title, this.body)
            //console.log(notiCount)

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
        
        return (
            <View>
               <Text>{this.props.notiCount}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    const notiCount = state.cloud.notiCount
    
    console.log(notiCount)
    return {
        notiCount
    }
}
export default connect(mapStateToProps, { GetNotification})(PushNotification)
//export default PushNotification