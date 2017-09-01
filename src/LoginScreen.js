import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";
import FloatingLabel from "react-native-floating-labels";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import Icon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/FontAwesome";

class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  };

  gotoSignup = () => {
    this.props.navigation.navigate("signup");
  };
  render() {
    return (
      <LinearGradient
        colors={["#58d1fc", "#5499C7"]}
        style={styles.linearGradient}
      >
      <Image
              source={require("../img/Login_background.png")}
              style={styles.backgroundImage}
            />
        <KeyboardAwareScrollView>
          <View style={styles.viewContainer}>
            
            <View style={styles.textAlign}>
              <Image
                style={styles.stretch}
                source={require("../img/Q5-logo.png")}
              />
            </View>
            <View style={styles.emailContainer}>
              <View style={styles.emailIconStyle}>
                <Icon name="user-circle" size={35} />
              </View>
              <View style={styles.emailInputStyle}>
                <FloatingLabel
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  style={styles.formInput}
                  underlineColorAndroid="transparent"
                >
                  EMAIL
                </FloatingLabel>
              </View>
            </View>
            <View style={styles.passwordContainer}>
              <View style={styles.passwordIconStyle}>
                <Icon name="lock" size={40} />
              </View>
              <View style={styles.passwordInputStyle}>
                <FloatingLabel
                  labelStyle={styles.labelInput}
                  inputStyle={styles.input}
                  style={styles.formInput}
                  underlineColorAndroid="transparent"
                >
                  PASSWORD
                </FloatingLabel>
              </View>
            </View>

            <Button
              buttonStyle={styles.loginBtnStyle}
              color="#222222"
              title="Log In"
            />

            <View style={styles.signupContainer}>
              <Text style={styles.signupText}>DON'T HAVE AN ACCOUNT?</Text>
              <TouchableOpacity style={styles.signupBtn}>
                <Text style={styles.signupBtnText} onPress={this.gotoSignup}>
                  SIGN UP NOW!
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.ORAlign}> OR </Text>
            </View>

            <View style={styles.facebookBtn}>
              <Icon.Button name="facebook" backgroundColor="#3b5998">
                Login with Facebook
              </Icon.Button>
            </View>

            <View style={styles.googleBtn}>
              <Icon.Button name="google" backgroundColor="#DD4B39">
                Sign in with Google
              </Icon.Button>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </LinearGradient>
    );
  }
}

const styles = {
  linearGradient: {
    flex: 1
  },
  backgroundImage: {
    flex:1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: "stretch"
  },
  viewContainer: {
    flex: 1,
    padding: 20
  },
  facebookBtn: {
    flex: 1,
    backgroundColor: "#3b5998",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#3b5998",
    height: 50
  },

  googleBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: "#DD4B39",
    borderWidth: 1,
    borderColor: "#DD4B39",
    height: 50
  },

  signupContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 5,
    marginTop: 20
  },
  signupText: {
    flexDirection: "column"
  },
  signupBtn: {
    alignItems: "center"
  },
  signupBtnText: {
    flexDirection: "column",
    color: "blue"
  },
  ORAlign: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  label: {
    color: "#0d8898",
    fontSize: 20
  },

  emailContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: "row"
  },
  emailIconStyle: {
    paddingTop: 20,
    flexDirection: "column"
  },
  emailInputStyle: {
    flex: 1,
    flexDirection: "column"
  },
  passwordContainer: {
    flex: 1,
    marginTop: 20,
    flexDirection: "row"
  },
  passwordIconStyle: {
    paddingTop: 20,
    flexDirection: "column"
  },
  passwordInputStyle: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 10
  },
  textAlign: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
    backgroundColor: "#C0C0C0",
    width: 140,
    height: 140,
    opacity: 0.5
  },
  stretch: {
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },

  loginBtnStyle: {
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: "transparent",
    borderWidth: 1,
    height: 50
  },

  labelInput: {
    fontSize: 12,
    color: "#000"
  },
  formInput: {
    borderBottomWidth: 1,
    marginLeft: 10,
    borderColor: "#333"
  },
  input: {
    borderWidth: 0,
    color: "#000",
    fontSize: 12,
    paddingTop: 10
  }
};

export default LoginScreen;
