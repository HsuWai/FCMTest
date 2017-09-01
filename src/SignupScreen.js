import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import FloatingLabel from "react-native-floating-labels";

class SignupScreen extends Component {
  static navigationOptions = {
    title: "Sign Up",
    headerTitleStyle: {
      textAlign: "center",
      alignSelf: "center"
    },
    headerStyle: {
      backgroundColor: "#008489",
      elevation: 0 //hide navbar line
    },
    headerTintColor: "#fff"
  };

  gotoInterest = () => {
    this.props.navigation.navigate("interest");
  };
  render() {
    return (
      <LinearGradient
        colors={["#008489", "#5499C7"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <View style={styles.viewContainer}>
            <View style={styles.textAlign}>
              <Icon name="add-a-photo" size={40} style={styles.iconAlign} />
            </View>
            <View style={styles.textAlign}>
              <Icon name="account-circle" size={40} style={styles.iconAlign} />
            </View>
            <View style={styles.textAlign}>
              <Icon name="image" size={40} style={styles.iconAlign} />
            </View>
          </View>
          <View style={styles.viewStyle}>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              underlineColorAndroid="transparent"
            >
              NAME
            </FloatingLabel>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              underlineColorAndroid="transparent"
            >
              EMAIL
            </FloatingLabel>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              underlineColorAndroid="transparent"
            >
              PASSWORD
            </FloatingLabel>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              underlineColorAndroid="transparent"
            >
              PHONE
            </FloatingLabel>
            <FloatingLabel
              labelStyle={styles.labelInput}
              inputStyle={styles.input}
              style={styles.formInput}
              underlineColorAndroid="transparent"
            >
              ADDRESS
            </FloatingLabel>
          </View>

          <TouchableOpacity
            style={styles.touchStyle}
            onPress={this.gotoInterest}
          >
            <View style={{ flex: 2 }}>
              <Text style={styles.touchTextStyle}>Continue</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Icon
                style={styles.touchIconStyle}
                name="chevron-right"
                size={20}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    );
  }
}

const styles = {
  touchStyle: {
    flexDirection: "row",
    height: 60,
    margin: 20,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  touchTextStyle: {
    flexDirection: "column",
    textAlign: "right",
    color: "#fff",
    fontSize: 14
  },
  touchIconStyle: {
    flexDirection: "column",
    alignSelf: "center",
    color: "#fff"
  },

  linearGradient: {
    flex: 1
  },
  viewContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: "#7FB3D5",
    opacity: 0.5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  viewStyle: {
    flex: 2,
    padding: 5
  },
  textAlign: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#C0C0C0",
    width: 80,
    height: 80
  },
  iconAlign: {
    justifyContent: "center",
    alignItems: "center"
  },

  btnStyle: {
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "transparent"
  },

  labelInput: {
    fontSize: 12,
    color: "#fff"
  },
  formInput: {
    borderBottomWidth: 1.5,
    marginLeft: 20,
    borderColor: "#333"
  },
  input: {
    borderWidth: 0,
    color: "#fff",
    fontSize: 12
  }
};

export default SignupScreen;
