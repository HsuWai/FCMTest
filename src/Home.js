import React,{Component} from 'react';
import FCM from "react-native-fcm";
import { View, Text} from 'react-native'
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
      console.log(token)//update your fcm token on server.
    });
  }
  render() {
    return (
     <View>
         <PushNotification/>
        <Text>FCM Setup</Text>
      </View>
    );
  }
}