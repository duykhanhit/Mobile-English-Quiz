import React from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import FormAccount from "../../components/FormAccount";
import styles from "./styles";
import email from "../../assets/email.png";

const index = () => {
  return (
    <FormAccount>
      <View style={styles.login_block}>
        <Text style={styles["text-title"]}>Quên mật khẩu</Text>
        <Text style={styles["text-rules"]}>
          Vui lòng nhập số điện thoại của bạn để tiếp tục.
        </Text>
        <View style={styles.input_block}>
          <Image source={email} style={styles.icons} />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
      </View>
      <View style={styles["continue-button"]}>
        <TouchableOpacity>
          <Text style={styles["continue-text"]}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </FormAccount>
  );
};

export default index;
