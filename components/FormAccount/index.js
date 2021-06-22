import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import default_background from "../../assets/default_background.png";

const FormAccount = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_block}>
        <Image source={default_background} style={styles.image} />
      </View>
      {children}
    </View>
  );
};

export default FormAccount;
