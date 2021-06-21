import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";
import avatar from "../../assets/avatar.jpg";
import background from "../../assets/background.png";

const SettingScreen = ({ navigation }) => {
  const [gender, setGender] = useState(null);
  const [edit, setEdit] = useState(false);
  const [disable, setDisable] = useState(false);
  const [date, setDate] = useState({
    date: new Date(),
    open: false,
  });

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <StatusBar
              animated={true}
              barStyle='dark-content'
              hidden={false}
            />
            <View style={styles.backgroundContainer}>
              <Image source={background} style={styles.background} />
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  setEdit(!edit);
                  setDisable(!disable);
                }}
                style={styles.buttonEdit}
              >
                {!edit ? (
                  <MaterialIcon name="account-edit" size={26} />
                ) : (
                  <MaterialIcon name="check" size={26} />
                )}
              </TouchableOpacity>
              <View style={styles.avatar}>
                <Image source={avatar} style={styles.image} />
              </View>
              <View style={styles.inforContainer}>
                <Text style={styles.lableInput}>Mã sinh viên</Text>
                <TextInput editable={false} style={styles.input} />
                <Text style={styles.lableInput}>Họ và tên</Text>
                <TextInput editable={disable} style={styles.input} />
                <Text style={styles.lableInput}>Giới tính</Text>
                <RNPickerSelect
                  placeholder={{
                    label: "Select an gender",
                    value: null,
                    color: "#9EA0A4",
                  }}
                  onValueChange={(value) => setGender(value)}
                  items={
                    disable
                      ? [
                          { label: "Nam", value: false },
                          { label: "Nữ", value: true },
                        ]
                      : []
                  }
                  style={{
                    inputIOS: {
                      fontSize: 16,
                      height: 50,
                      paddingHorizontal: 10,
                      borderColor: "black",
                      borderWidth: 2,
                      fontSize: 18,
                      height: 50,
                      backgroundColor: "#f1f1f1",
                      marginBottom: 15,
                    },
                    iconContainer: {
                      top: 12,
                      right: 12,
                    },
                  }}
                  value={gender}
                  Icon={() => {
                    return (
                      <MaterialIcon
                        name="chevron-down"
                        size={26}
                        color="black"
                      />
                    );
                  }}
                />
                <Text style={styles.lableInput}>Ngày sinh</Text>
                <TouchableOpacity
                  style={[
                    styles.input,
                    { justifyContent: "center", fontSize: 16 },
                  ]}
                  onPress={() => {
                    disable &&
                      setDate({
                        ...date,
                        open: !date.open,
                      });
                  }}
                >
                  <Text>
                    {date.date
                      ? date.date
                          .toLocaleString()
                          .slice(date.date.toLocaleString().indexOf(",") + 2)
                      : ""}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  date={date.date}
                  mode="date"
                  pickerContainerStyleIOS={{
                    backgroundColor: "#000",
                    color: "#000",
                  }}
                  isDarkModeEnabled={false}
                  isVisible={date.open}
                  onConfirm={(date) => {
                    setDate({
                      date: date,
                      open: false,
                    });
                  }}
                  onCancel={() => {
                    setDate({
                      ...date,
                      open: false,
                    });
                  }}
                />
              </View>
              {!edit && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("HomeScreen")}
                    style={styles.touch}
                  >
                    <View style={styles.logout}>
                      <Text style={styles.textLogout}>Đăng xuất</Text>
                      <MaterialIcon name="exit-to-app" size={26} />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SettingScreen;
