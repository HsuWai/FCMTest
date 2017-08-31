import React,{Component} from 'react';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from "react-native-fcm";

import { View, Text, TouchableOpacity} from 'react-native'
import PushNotification from './PushNotification'

export default class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fcm_token: ""
    };
  }
  componentDidMount () {
    FCM.requestPermissions();
    FCM.getFCMToken().then(token => {
      this.setState({fcm_token:token});
      //console.log(token)//update your fcm token on server.
    });
    
  }

  sendNotificationWithData = () => {
    FCM.presentLocalNotification({
      vibrate: 500,
      title: 'Hello',
      body: 'Test Notification',
      priority: "high",
      show_in_foreground: true,
      picture: 'https://firebase.google.com/_static/af7ae4b3fc/images/firebase/lockup.png'
    });
  }
  render() {
    return (
     <View>
         <PushNotification />
        <Text>FCM Setup</Text>
        <TouchableOpacity onPress={() => this.sendNotificationWithData()} >
          <Text>Send Notification</Text>
        </TouchableOpacity>
      </View>
    );
  }
}