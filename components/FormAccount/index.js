import React from "react";
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import styles from "./styles";
import default_background from "../../assets/default_background.png";

const FormAccount = ({ children }) => {
  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   style={{flex: 1}}
    // >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.image_block}>
            <Image source={default_background} style={styles.image} />
          </View>
          {children}
        </View>
      </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  );
};

export default FormAccount;
