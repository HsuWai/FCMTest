import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Button, CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";

class InterestScreen extends Component {
  static navigationOptions = {
    title: "What is your interest?",
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

  gotoTermsConditions = () => {
    this.props.navigation.navigate("terms_conditions");
  };

  render() {
    return (
      <LinearGradient
        colors={["#008489", "#5499C7"]}
        style={styles.linearGradient}
      >
        <ScrollView>
          <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#fff"/>

          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="leak-remove" size={20} />
            </View>
            <Text style={styles.alignItemText}>Fashions</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="local-florist" size={20} />
            </View>
            <Text style={styles.alignItemText}>Home Decorations</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="local-hospital" size={20} />
            </View>
            <Text style={styles.alignItemText}>Health Care</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="local-drink" size={20} />
            </View>
            <Text style={styles.alignItemText}>Restaurants</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="business-center" size={20} />
            </View>
            <Text style={styles.alignItemText}>Design and Craft</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="book" size={20} />
            </View>
            <Text style={styles.alignItemText}>Books</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.alignIcon}>
              <Icon name="local-mall" size={20} />
            </View>
            <Text style={styles.alignItemText}>Accessories</Text>
            <CheckBox
              style={styles.alignSelectItem}
              checkedIcon="dot-circle-o"
              uncheckedIcon="circle-o"
            />
          </View>

          <TouchableOpacity
            style={styles.touchStyle}
            onPress={this.gotoTermsConditions}
          >
            <View style={{ flex: 2 }}>
              <Text style={styles.touchTextStyle}> Continue </Text>
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
  searchBar: {
    color:'#fff',
    paddingLeft: 30,
    fontSize: 14,
    height: 50,
    //flex: 0.1,
   // borderWidth: 1,
   // borderColor: "#B3B6B7",
    margin: 10
  },
  itemContainer: {
    paddingTop: 30,
    paddingLeft: 20,
    flexDirection: "row"
  },
  alignIcon: {
    flexDirection: "column",
    flex: 1
  },
  alignItemText: {
    flexDirection: "column",
    flex: 3,
    color: "#fff"
  },
  alignSelectItem: {
    flexDirection: "column",
    flex: 1
  },
  btnStyle: {
    borderRadius: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "transparent"
  }
};

export default InterestScreen;
