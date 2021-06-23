import React, { useState, useEffect } from "react";
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
  TouchableHighlight,
  Keyboard,
  StatusBar,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BottomSheet from "reanimated-bottom-sheet";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated from "react-native-reanimated";
import * as ImagePicker from "expo-image-picker";

import styles from "./styles";
import avatar from "../../assets/avatar.jpg";
import background from "../../assets/background.jpg";

const SettingScreen = ({ navigation, route }) => {

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const [closeButtomSheet, setCloseButtomSheet] = useState(false);
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState(null);
  const [edit, setEdit] = useState(false);
  const [disable, setDisable] = useState(false);
  const [date, setDate] = useState({
    date: new Date(),
    open: false,
  });

  useEffect(() => {
    if (edit === false && closeButtomSheet === true) {
      bs.current.snapTo(1);
    }
  }, [edit, closeButtomSheet]);

  useEffect(() => {
    bs.current.snapTo(1);
  }, [image]);

  const renderHeader = () => {
    return (
      <TouchableHighlight
        underlayColor="#DDDDDD"
        onPress={() => {
          bs.current.snapTo(1);
        }}
        style={styles.barContainer}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <View style={styles.bar} />
        </View>
      </TouchableHighlight>
    );
  };

  const renderContent = () => {
    return (
      <View style={styles.buttonsAvatar}>
        <Text style={styles.textUploadPhoto}>Tải ảnh lên</Text>
        <Text style={styles.textChoosePhoto}>Chọn ảnh đại diện của bạn</Text>
        <View style={styles.buttonsUpload}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={takePhotoFromCamera}
              style={styles.touch}
            >
              <View style={styles.logout}>
                <Text style={styles.textLogout}>Chụp ảnh</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={styles.touch}
            >
              <View style={styles.logout}>
                <Text style={styles.textLogout}>Chọn ảnh</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => bs.current.snapTo(1)}
              style={styles.touch}
            >
              <View style={styles.logout}>
                <Text style={styles.textLogout}>Đóng</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const callBack = ( image ) => {
    setImage(image);
  }

  const takePhotoFromCamera = () => {
    navigation.navigate("CameraScreen", {
      callBack: callBack
    });
  };

  const choosePhotoFromLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, width: "100%" }}>
            <StatusBar animated={true} barStyle="dark-content" hidden={false} />
            <View style={styles.backgroundContainer}>
              <Image source={background} style={styles.background} />
            </View>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  setEdit(!edit);
                  setDisable(!disable);
                  setCloseButtomSheet(true);
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
                <Image
                  source={image === null ? avatar : { uri: image }}
                  style={styles.image}
                />
              </View>
              {edit && (
                <TouchableOpacity
                  onPress={() => bs.current.snapTo(0)}
                  style={styles.cameraIcon}
                >
                  <MaterialIcon name="camera-outline" size={40} />
                </TouchableOpacity>
              )}
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
                  // pickerContainerStyleIOS={{
                  //   backgroundColor: "#000",
                  //   color: "#000",
                  // }}
                  // isDarkModeEnabled={false}
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
                    onPress={() => navigation.navigate("GetStarted")}
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
            <BottomSheet
              ref={bs}
              snapPoints={[400, 0]}
              renderContent={renderContent}
              renderHeader={renderHeader}
              initialSnap={1}
              callbackNode={fall}
              enabledGestureInteraction={true}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SettingScreen;
