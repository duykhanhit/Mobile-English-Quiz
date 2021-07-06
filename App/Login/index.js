import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FormAccount from "../../components/FormAccount/index";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import _ from "lodash";
import { validateEmail, validatePassword } from "../../validate/validate";

const Login = ({ navigation }) => {
  const { userLogin, userState } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValidate, setEmailValidate] = useState(true);
  const [passwordValidate, setPasswordValidate] = useState(true);

  const handleLogin = () => {
    setEmailValidate(validateEmail(email));
    setPasswordValidate(validatePassword(password));
    if (!email || !password) {
      alert("Vui lòng nhập đầy đủ các trường!!!");
    }
    if (!emailValidate || !passwordValidate) {
      return;
    }
    userLogin(email.toLowerCase(), password);
    userLogin(email, password);
    setEmail("");
    setPassword("");
  };
  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.login_block}>
          <Text style={styles.text_input}>ĐĂNG NHẬP</Text>
          <View style={styles.input_block}>
            <MaterialIcon
              name="mail"
              size={20}
              color="#A0A0A0"
              style={styles.icons}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              defaultValue={email}
            />
            <Text style={styles.validate_text}>
              {!emailValidate ? "Email cần nhập đúng định dạng" : null}
            </Text>
          </View>
          <View style={styles.input_block}>
            <MaterialIcon
              name="lock"
              size={20}
              color="#A0A0A0"
              style={styles.icons}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              onChangeText={(text) => setPassword(text)}
              defaultValue={password}
              secureTextEntry={true}
            />
            <Text style={styles.validate_text}>
              {!passwordValidate ? "Mật khẩu phải từ 6 ký tự" : null}
            </Text>
          </View>

          <View style={styles["login-button-block"]}>
            <TouchableOpacity
              onPress={() => handleLogin()}
              style={styles.login_button}
            >
              <Text style={styles.text_button}>ĐĂNG NHẬP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.forgot_pass_blog}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.forgot_password}>Quên mật khẩu</Text>
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
      </View>
    </FormAccount>
  );
};

export default Login;
