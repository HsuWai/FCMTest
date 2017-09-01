import React, { Component } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

class TermsConditionsScreen extends Component {
  static navigationOptions = {
    title: "TERMS AND CONDITIONS",
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

  render() {
    return (
      <LinearGradient
        colors={["#008489", "#5499C7"]}
        style={styles.linearGradient}
      >
        <View>
          <Text style={styles.textStyle}>
            1. A Terms and Conditions agreement is the agreement that includes
            the terms, the rules and the guidelines of acceptable behavior, plus
            other useful sections, to which users must agree in order to use or
            access your website and mobile app. {"\n"} {"\n"}
            2. A Terms and Conditions agreement is the agreement that includes
            the terms, the rules and the guidelines of acceptable behavior, plus
            other useful sections, to which users must agree in order to use or
            access your website and mobile app.
          </Text>
          <Button buttonStyle={styles.btnStyle} large title="I Agree" />
        </View>
      </LinearGradient>
    );
  }
}

const styles = {
  linearGradient: {
    flex: 1
  },
  textStyle: {
    marginTop: 20,
    margin: 10,
    color: "#fff",
    paddingLeft: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  btnStyle: {
    borderRadius: 20,
    marginTop: 70,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#fff"
  }
};

export default TermsConditionsScreen;
