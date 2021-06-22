import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FormAccount from "../../components/FormAccount";
import { CheckBox } from "react-native-elements";
import checkBoxIcon from "../../assets/checkBoxIcon.png";
import unCheckBoxIcon from "../../assets/unCheckBoxIcon.png";
import account from "../../assets/account.png";
import studentcode from "../../assets/studentcode.png";
import password from "../../assets/password.png";
import email from "../../assets/email.png";

const SignIn = ({ navigation }) => {
  const [check, setCheck] = useState(true);
  const [uncheck, setUncheck] = useState(false);
  const InputField = (source, placeholder) => {
    return (
      <View style={styles.input_block}>
        <Image source={source} style={styles.icons} />
        <TextInput style={styles.input} placeholder={placeholder} />
      </View>
    );
  };
  return (
    <FormAccount>
      <View style={styles.login_block}>
        <Text style={styles.text_input}>Đăng ký</Text>
        {InputField(account, "Họ tên")}
        {InputField(studentcode, "Mã sinh viên")}
        {InputField(email, "Email")}
        {InputField(password, "Mật khẩu")}
        {InputField(password, "Nhập lại mật khẩu")}

        <View style={styles["checkbox-block"]}>
          <CheckBox
            center
            title="Nam"
            checkedIcon={<Image source={checkBoxIcon} />}
            uncheckedIcon={
              <Image
                source={unCheckBoxIcon}
                style={{ width: 25, height: 25 }}
              />
            }
            checked={check}
            onPress={() => {
              setCheck(true);
              setUncheck(false);
            }}
          />
          <CheckBox
            title="Nữ"
            checkedIcon={
              <Image source={checkBoxIcon} style={{ width: 25, height: 25 }} />
            }
            uncheckedIcon={
              <Image
                source={unCheckBoxIcon}
                style={{ width: 25, height: 25 }}
              />
            }
            checked={uncheck}
            onPress={() => {
              setUncheck(true);
              setCheck(false);
            }}
          />
        </View>

        <View style={styles["login-button-block"]}>
          <TouchableOpacity onPress={() => navigation.navigate("HomeStack")} style={styles.login_button}>
            <Text style={styles.text_button}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles["checking-account-block"]}>
        <Text style={styles["register-account"]}>Bạn đã có tài khoản?</Text>
        <TouchableOpacity style={styles.touchable}>
          <Text
            style={styles["text-touchable"]}
            onPress={() => navigation.goBack()}
          >
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>
      </View>
    </FormAccount>
  );
};

export default SignIn;
