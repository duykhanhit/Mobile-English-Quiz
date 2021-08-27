import React, { useState, useEffect, useContext, Button } from "react";
import { Text, TextInput, TouchableOpacity, View,Alert } from "react-native";
import styles from "./styles";
import FormAccount from "../../components/FormAccount";
import { CheckBox } from "react-native-elements";
import MaterialIcon from "react-native-vector-icons/AntDesign";
import DatetimeIcon from "react-native-vector-icons/Fontisto";
import CheckIcon from "react-native-vector-icons/MaterialIcons";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { validateEmail, validatePassword } from "../../validate/validate";
import _ from "lodash";

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

  const [nameValidate, setNameValidate] = useState(false);
  const [emailValidate, setEmailValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const [confirmPasswordValidate, setConfirmPasswordValidate] = useState(false);

  const [isFocus, setIsFocus] = useState(false);

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePas = /\S/;
  const Error = ({ error }) => {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.textError}>{error}</Text>
      </View>
    );
  };

  const handleEndEditingName = () => {
    if (_.isEmpty(name.trim())) {
      setNameValidate(true);
      return true;
    } else {
      setNameValidate(false);
      return false;
    }
  };

  const handleEndEditingEmail = () => {
    if (!re.test(String(email).toLowerCase())) {
      setEmailValidate(true);
      return true;
    } else {
      setEmailValidate(false);
      return false;
    }
  };

  const handleEndPassword = () => {
    if (!rePas.test(password)) {
      setPasswordValidate(true);
      return true;
    }
    if (password.trim().length < 6) {
      setPasswordValidate(true);
      return true;
    } else {
      setPasswordValidate(false);
      return false;
    }
  };

  const handleEndConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordValidate(true);
      return true;
    } else {
      setConfirmPasswordValidate(false);
      return false;
    }
  };
  const handleRegister = () => {
    if (
      handleEndEditingName() ||
      handleEndEditingEmail() ||
      handleEndPassword() ||
      handleEndConfirmPassword()
    ) {
      return;
    }
    if (check === true) {
      setGender("male");
    } else {
      setGender("female");
    }
    userRegister({
      name,
      email: email.toLowerCase(),
      password,
      gender,
    });
  };

  return (
    <FormAccount>
      <View style={styles.wrapper_container}>
        <View style={styles.login_block}>
          <Text style={styles.text_input}>ĐĂNG KÝ</Text>

          <View style={styles.input_block}>
            <MaterialIcon
              name="user"
              size={20}
              color="#A0A0A0"
              style={styles.icons}
            />
            <TextInput
              
              onEndEditing={() => handleEndEditingName()}
              style={styles.input}
              placeholder="Vui lòng nhập họ tên"
              onChangeText={(text) => setName(text)}
              secureTextEntry={false}
            />
            {nameValidate && <Error error="Họ tên không được để trống!" />}
          </View>

          <View style={styles.input_block}>
            <MaterialIcon
              name="mail"
              size={20}
              color="#A0A0A0"
              style={styles.icons}
            />
            <TextInput
              
              onEndEditing={() => handleEndEditingEmail()}
              style={styles.input}
              placeholder="Vui lòng nhập email"
              onChangeText={(text) => setEmail(text)}
              secureTextEntry={false}
            />
            {emailValidate && (
              <Error error="Vui lòng nhập đúng định dạng email!" />
            )}
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
              placeholder="Vui lòng nhập mật khẩu"
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              
              onEndEditing={() => handleEndPassword()}
            />
            {passwordValidate && <Error error="Mật khẩu ít nhất 6 ký tự và không chứa dấu cách!" />}
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
              placeholder="Vui lòng nhập lại mật khẩu"
              onChangeText={(text) => setComfirmPassword(text)}
              secureTextEntry={true}
              
              onEndEditing={() => handleEndConfirmPassword()}
            />
            {confirmPasswordValidate && (
              <Error error="Nhập lại mật khẩu không khớp!" />
            )}
          </View>

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
      </View>
    </FormAccount>
  );
};

export default SignIn;
