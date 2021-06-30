import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import FormAccount from "../../components/FormAccount";
import styles from "./styles";
import KeyCode from "react-native-vector-icons/Entypo";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import MaterialIcon from "react-native-vector-icons/AntDesign";

const VerifyCode = ({ navigation }) => {
  const [verifyCode, setVerifyCode] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const { userState, verifyCodeUser } = useContext(UserContext);
  const handleVerify = () => {
    if (!verifyCode || !password || !confirmPassword) {
      alert("Please enter entire field");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password must match confirm password");
      return;
    }
    if (userState.dataToken.success === false) {
      alert(userState.dataToken.data);
      return;
    }
    verifyCodeUser(verifyCode, password);
  };
  useEffect(() => {
    !!userState &&
      userState.dataToken.success &&
      navigation.navigate("HomeStack");
  }, [userState]);
  return (
    <FormAccount>
      <View style={styles.container_block}>
        <View style={styles.login_block}>
          <Text style={styles["text-title"]}>Quên mật khẩu</Text>
          <Text style={styles["text-rules"]}>
            Nhập mã xác minh đã được gửi đến email của bạn
          </Text>
          <View style={styles.input_block}>
            <KeyCode
              name="key"
              size={20}
              color="#A0A0A0"
              style={styles.icons}
            />
            <TextInput
              style={styles.input}
              placeholder="Verify code"
              value={verifyCode}
              onChangeText={(text) => setVerifyCode(text)}
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
          <View style={styles.input_block}>
            <MaterialIcon
              name="lock"
              size={20}
              color="#A0A0A0"
              style={styles.icons}
            />
            <TextInput
              style={styles.input}
              placeholder="Xác nhận mật khẩu"
              onChangeText={(text) => setConfirmPassword(text)}
              defaultValue={confirmPassword}
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles["continue-button"]}
          onPress={() => handleVerify()}
        >
          <Text style={styles["continue-text"]}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </FormAccount>
  );
};

export default VerifyCode;
