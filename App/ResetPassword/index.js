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
import MaterialIcon from "react-native-vector-icons/AntDesign";
import { validatePassword } from "../../validate/validate";
import { mainGreen, red } from "../../assets/colors";

const ResetPassword = ({ navigation, route }) => {
  const [value, setValue] = useState({
    password: "",
    rePassword: "",
  });
  const [check, setCheck] = useState(true);
  const [checkShort, setCheckShort] = useState(false);
  const [fail, setFail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { userState, verifyCodeUser } = useContext(UserContext);
  const { verifyCode } = route.params;

  const handleSubmit = async () => {
    const state = /.{6,}/.test(String(value.password).toLowerCase());
    if (!state) {
      return setCheckShort(true);
    } else {
      setCheckShort(false);
    }

    if (check && !checkShort) {
      setIsLoading(true);
      const status = await verifyCodeUser(verifyCode, value.password);
      if (status === false) {
        setIsLoading(false);
        setFail(true);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (value.password !== value.rePassword) {
      setCheck(false);
    } else {
      setCheck(true);
    }
  }, [value]);

  const handleOnchange = (name) => {
    return (text) => {
      setValue({
        ...value,
        [name]: text,
      });
      if (name === "password") {
        const state = /.{6,}/.test(String(text).toLowerCase());
        if (state) {
          setCheckShort(false);
        }
      }
    };
  };
  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.login_block}>
          <Text style={styles["text-title"]}>TẠO MẬT KHẨU</Text>
          <Text style={styles["text-rules"]}>Nhập mật khẩu mới của bạn</Text>
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
              onChangeText={handleOnchange("password")}
              defaultValue={value.password}
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
              onChangeText={handleOnchange("rePassword")}
              defaultValue={value.rePassword}
              secureTextEntry={true}
            />
            {!check ? (
              <Text style={{ color: red, textAlign: "center" }}>
                Mật khẩu không khớp
              </Text>
            ) : null}
            {checkShort ? (
              <Text style={{ color: red, textAlign: "center" }}>
                Vui lòng nhập mật khẩu tối thiểu 6 ký tự
              </Text>
            ) : null}
            {fail ? (
              <Text style={{ color: red, textAlign: "center" }}>
                Hết hạn OTP
              </Text>
            ) : null}
            {isLoading ? (
              <ActivityIndicator size="small" color={mainGreen} />
            ) : (
              <></>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles["continue-button"]}
          onPress={() => handleSubmit()}
        >
          <Text style={styles["continue-text"]}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
    </FormAccount>
  );
};

export default ResetPassword;
