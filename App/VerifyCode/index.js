import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FormAccount from "../../components/FormAccount";
import styles from "./styles";
import KeyCode from "react-native-vector-icons/Entypo";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { mainGreen, red } from "../../assets/colors";

const VerifyCode = ({ navigation, route }) => {
  const [code, setCode] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState();
  const { verifyCode, userState } = useContext(UserContext);
  const handleSubmit = async () => {
    setIsLoading(true);
    const data = await verifyCode({
      code,
      email: route.params.email,
    });
    setStatus(data);
    if (data === true) {
      setIsLoading(false);
      navigation.navigate("ResetPassword", {
        verifyCode: code,
      });
    } else {
      setIsLoading(false);
    }
  };

  const handleOnchange = () => {
    return (text) => {
      setStatus(true);
      setCode(text.replace(/[^0-9]/g, ""));
    };
  };

  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.container_block}>
          <View style={styles.login_block}>
            <Text style={styles["text-title"]}>Quên mật khẩu</Text>
            <Text style={styles["text-rules"]}>
              Nhập mã OTP đã được gửi đến email của bạn
            </Text>
            <View style={styles.input_block}>
              <KeyCode
                name="key"
                size={20}
                color="#A0A0A0"
                style={styles.icons}
              />
              <TextInput
                maxLength={6}
                keyboardType="numeric"
                style={styles.input}
                placeholder="Nhập mã OTP"
                value={code}
                onChangeText={handleOnchange()}
              />
            </View>
            <Text style={{ color: red, textAlign: "center" }}>
              {status !== true ? status : ""}
            </Text>
            {isLoading ? (
              <ActivityIndicator size="small" color={mainGreen} />
            ) : (
              <></>
            )}
          </View>
          <TouchableOpacity
            style={styles["continue-button"]}
            onPress={() => handleSubmit()}
          >
            <Text style={styles["continue-text"]}>Tiếp tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </FormAccount>
  );
};

export default VerifyCode;
