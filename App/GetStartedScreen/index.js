import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

import image from '../../assets/default_background.png'

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container_started}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.view_touchable}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.text}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
