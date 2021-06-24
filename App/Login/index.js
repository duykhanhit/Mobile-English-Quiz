import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import image from "../../assets/DefaultImage.png";
import FormAccount from "../../components/FormAccount/index";

const Login = ({ navigation }) => {
  return (
    <FormAccount>
      <View style={styles.login_block}>
        <Text style={styles.text_input}>ĐĂNG NHẬP</Text>
        <View style={styles.input_block}>
          <Image
            source={require("../../assets/studentcode.png")}
            style={styles.icons}
          />
          <TextInput style={styles.input} placeholder="Mã sinh viên" />
        </View>
        <View style={styles.input_block}>
          <Image
            source={require("../../assets/password.png")}
            style={styles.icons}
          />
          <TextInput style={styles.input} placeholder="Mật khẩu" />
        </View>

        <View style={styles["login-button-block"]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("HomeStack")}
            style={styles.login_button}
          >
            <Text style={styles.text_button}>ĐĂNG NHẬP</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles["checking-account-block"]}>
        <Text style={styles["register-account"]}>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity style={styles.touchable}>
          <Text
            style={styles["text-touchable"]}
            onPress={() => navigation.navigate("SignIn")}
          >
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
    </FormAccount>
  );
};

export default Login;
