import React, { useContext, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FormAccount from "../../components/FormAccount/index";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import _ from "lodash";

const re =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = ({ navigation }) => {
  const { userLogin } = useContext(UserContext);
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState(true);

  const handleLogin = async () => {
    if (!user.email || !user.password) {
      return setIsValid({
        email: false,
        password: false,
      });
    }
    const state = await userLogin(user.email.toLowerCase(), user.password);
    if (!state) {
      setStatus(false);
    }
  };

  const handleChangeText = (name) => {
    return (text) => {
      setStatus(true);
      if (name === "password" && text.trim().length >= 6) {
        setIsValid({
          ...isValid,
          [name]: true,
        });
      }
      if (name === "email" && re.test(String(text).toLowerCase())) {
        setIsValid({
          ...isValid,
          [name]: true,
        });
      }
      setUser({
        ...user,
        [name]: text,
      });
    };
  };

  const handleOnBlur = (name) => {
    return () => {
      setStatus(true);
      setIsValid({
        ...isValid,
        [name]: false,
      });
      if (name === "password" && user[name].trim().length >= 6) {
        setIsValid({
          ...isValid,
          [name]: true,
        });
      }
      if (name === "email" && re.test(String(user[name]).toLowerCase())) {
        setIsValid({
          ...isValid,
          [name]: true,
        });
      }
    };
  };

  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.login_block}>
          <Text style={styles.text_input}>ĐĂNG NHẬP</Text>
          <Text
            style={{
              ...styles.validate_text,
              textAlign: "center",
              paddingBottom: 5,
            }}
          >
            {!status ? "Thông tin đăng nhập không chính xác!" : ""}
          </Text>
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
              onChangeText={handleChangeText("email")}
              defaultValue={user.email}
              onBlur={handleOnBlur("email")}
            />
            <Text style={styles.validate_text}>
              {!isValid.email ? "Email cần nhập đúng định dạng" : ""}
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
              onChangeText={handleChangeText("password")}
              defaultValue={user.password}
              secureTextEntry={true}
              onBlur={handleOnBlur("password")}
            />
            <Text style={styles.validate_text}>
              {!isValid.password ? "Mật khẩu phải từ 6 ký tự" : ""}
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
