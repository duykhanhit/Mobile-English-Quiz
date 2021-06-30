import React, { useContext, useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import FormAccount from "../../components/FormAccount";
import styles from "./styles";
import KeyCode from "react-native-vector-icons/Entypo";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import MaterialIcon from "react-native-vector-icons/AntDesign";

const ResetPassword = () => {
    return (
        <FormAccount>
      <View style={styles.container_block}>
        <View style={styles.login_block}>
          <Text style={styles["text-title"]}>Quên mật khẩu</Text>
          <Text style={styles["text-rules"]}>
            Nhập mã xác minh đã được gửi đến email của bạn
          </Text>
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
    )
}

export default ResetPassword


