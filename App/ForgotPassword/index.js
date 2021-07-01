import React, { useContext, useEffect, useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import FormAccount from "../../components/FormAccount";
import styles from "./styles";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState();
  const { userState, forgotPasswordUser } = useContext(UserContext);
  useEffect(() => {
    !!userState &&
      userState.userInfor.success &&
      navigation.navigate("VerifyCode");
  }, [userState]);
  const handleForgot = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    if (!userState.userInfor.success) {
      alert(userState.userInfor.data);
      return;
    }
    forgotPasswordUser(email);
  };
  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.container_block}>
          <View style={styles.login_block}>
            <Text style={styles["text-title"]}>Quên mật khẩu</Text>
            <Text style={styles["text-rules"]}>
              Vui lòng nhập email của bạn để tiếp tục.
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
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles["continue-button"]}
            onPress={() => {
              handleForgot();
            }}
          >
            <Text style={styles["continue-text"]}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FormAccount>
  );
};

export default ForgotPassword;
