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

const image = {
  uri: "https://png.pngtree.com/png-clipart/20200401/original/pngtree-online-education-training-course-design-concept-vector-illustration-png-image_5331074.jpg",
};

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
