import React, { useState, useEffect, useContext, Button } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import FormAccount from "../../components/FormAccount";
import { CheckBox } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import DatetimeIcon from "react-native-vector-icons/Fontisto";
import CheckIcon from "react-native-vector-icons/MaterialIcons";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const SignIn = ({ navigation }) => {
  const [check, setCheck] = useState(true);
  const [uncheck, setUncheck] = useState(false);
  const { userRegister, userState } = useContext(UserContext);
  const [show, showModal] = useState(false);
  //data with each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [gender, setGender] = useState("male");

  const toggle = () => showModal(!show);

  const account = (name) => {
    return (
      <MaterialIcon
        name={name}
        size={20}
        color="#A0A0A0"
        style={styles.icons}
      />
    );
  };

  const InputField = (source, placeholder, setState, secureTextEntry) => {
    return (
      <View style={styles.input_block}>
        {source}
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          onChangeText={(text) => setState(text)}
          secureTextEntry={secureTextEntry}
        />
      </View>
    );
  };

  const handleRegister = () => {
    if (!name || !email || !password || !gender || !confirmPassword) {
      alert("Please enter entire field");
      return;
    }
    if (password !== confirmPassword) {
      alert("Password must be match with confirm password");
      return;
    }
    if (check === true) {
      setGender("male");
    } else {
      setGender("female");
    }
    userRegister({
      name,
      email,
      password,
      gender,
    });
  };
  useEffect(() => {
    console.log("userState", userState);
    !!userState && userState.success && navigation.navigate("HomeStack");
  }, [userState]);
  return (
    <FormAccount>
      <View style={styles.login_block}>
        <Text style={styles.text_input}>ĐĂNG KÝ</Text>

        {InputField(account("user"), "Họ tên", setName, false)}
        {InputField(account("mail"), "Email", setEmail, false)}
        {InputField(account("lock"), "Mật khẩu", setPassword, true)}
        {InputField(
          account("lock"),
          "Nhập lại mật khẩu",
          setComfirmPassword,
          true
        )}

        <View style={styles["checkbox-block"]}>
          <CheckBox
            center
            title="Nam"
            checkedIcon={<CheckIcon name="radio-button-checked" size={25} />}
            uncheckedIcon={
              <CheckIcon name="radio-button-unchecked" size={25} />
            }
            checked={check}
            onPress={() => {
              setCheck(true);
              setUncheck(false);
            }}
          />
          <CheckBox
            title="Nữ"
            checkedIcon={<CheckIcon name="radio-button-checked" size={25} />}
            uncheckedIcon={
              <CheckIcon name="radio-button-unchecked" size={25} />
            }
            checked={uncheck}
            onPress={() => {
              setUncheck(true);
              setCheck(false);
            }}
          />
        </View>

        <View style={styles["login-button-block"]}>
          <TouchableOpacity
            onPress={() => handleRegister()}
            style={styles.login_button}
          >
            <Text style={styles.text_button}>ĐĂNG KÝ</Text>
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
