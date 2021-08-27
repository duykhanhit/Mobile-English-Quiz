import React, { useContext, useEffect } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles";

import image from "../../assets/default_background.png";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const GetStarted = ({ navigation }) => {
  const { userState } = useContext(UserContext);

  const handleNavigate = () => {
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container_started}>
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.view_touchable}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => handleNavigate()}
            
          >
            <Text style={styles.text}>Get started</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;
