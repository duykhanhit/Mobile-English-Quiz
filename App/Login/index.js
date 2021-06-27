import React, { useContext, useEffect, useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FormAccount from "../../components/FormAccount/index";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const Login = ({ navigation }) => {
  const { userLogin, userState } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter your email and password");
      return;
    }
    userLogin({ email, password });
    setEmail("");
    setPassword("");
  };
  useEffect(() => {
    !!userState && userState.success && navigation.navigate("HomeStack");
  }, [userState]);
  return (
    <FormAccount>
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
        </View>

        <View style={styles["login-button-block"]}>
          <TouchableOpacity
            onPress={() => handleLogin()}
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
