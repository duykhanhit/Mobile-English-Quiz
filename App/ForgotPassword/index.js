import React, { useContext, useEffect, useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import FormAccount from "../../components/FormAccount";
import styles from "./styles";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { red } from "../../assets/colors";
const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailValidate, setEmailValidate] = useState(true);
  const [status, setStatus] = useState(true);
  const [check, setCheck] = useState(true);
  const { forgotPasswordUser } = useContext(UserContext);

  const handleForgot = async () => {
    if (!email.trim().length) {
      return setStatus(false);
    }
    if (!emailValidate) {
      return () => {
        setStatus(true);
        setEmailValidate(false);
      };
    }
    const state = await forgotPasswordUser({ email: email.toLowerCase() });
    console.log("aa", state);
    if (state) {
      navigation.navigate("VerifyCode");
    } else {
      setCheck(false);
    }
  };
  const handleChange = () => {
    return (text) => {
      const state = re.test(String(text).toLowerCase());
      setEmailValidate(state);
      setStatus(true);
      setEmail(text);
    };
  };
  const handleBlur = () => {
    return () => {
      if (email.length === 0) {
        setStatus(false);
        setEmailValidate(true);
      } else {
        setStatus(true);
      }
    };
  };
  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.container_block}>
          <View style={styles.login_block}>
            <Text style={styles["text-title"]}>QUÊN MẬT KHẨU</Text>
            <View style={styles.input_block}>
              <MaterialIcon
                name="mail"
                size={20}
                color="#A0A0A0"
                style={styles.icons}
              />
              <TextInput
                style={styles.input}
                placeholder="Nhập địa chỉ email"
                value={email}
                onChangeText={handleChange()}
                onBlur={handleBlur()}
              />
              <Text style={{ color: red, textAlign: "center" }}>
                {!emailValidate ? "Email cần nhập đúng định dạng." : ""}
                {!status ? "Vui lòng nhập email." : ""}
                {!check ? "Thất bại." : ""}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles["continue-button"]}
            onPress={() => {
              handleForgot();
            }}
          >
            <Text style={styles["continue-text"]}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FormAccount>
  );
};

export default ForgotPassword;
