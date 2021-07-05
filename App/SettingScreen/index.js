import React, { useState, useEffect, useContext, useRef, useMemo, createRef, useCallback } from "react";
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import BottomSheet from "react-native-bottomsheet-reanimated";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Animated from "react-native-reanimated";
import { RadioButton } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import _ from "lodash";
import moment from "moment";

import styles from "./styles";
import avatar from "../../assets/avatar.jpg";
import background from "../../assets/background.jpg";
import * as colors from "../../assets/colors";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const SettingScreen = ({ navigation }) => {
  const { userState, getUser, logout } = useContext(UserContext);
  const [focusInput, setFocusInput] = useState(false);
  // let bs = React.createRef();
  let fall = new Animated.Value(1);

  //
  const bottomSheetRef = createRef();
  const snapPoints = useMemo(() => ['0%', '50%'], []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("male");
  const [edit, setEdit] = useState(false);
  const [disable, setDisable] = useState(false);
  const [date, setDate] = useState({
    date: new Date(),
    open: false,
  });

  useEffect(() => {
    if (!_.isEmpty(userState.me)) {
      setName(userState.me.data.name);
      setEmail(userState.me.data.email);
      setGender(userState.me.data.gender);
      setDate({
        ...date,
        date: !_.isEmpty(userState.me.data?.birthday)
          ? new Date(userState.me.data.birthday)
          : new Date(),
      });
    }
  }, [userState]);

  const callBack = (image) => {
    setImage(image);
  };

  const takePhotoFromCamera = () => {
    navigation.navigate("CameraScreen", {
      callBack: callBack,
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
              <View style={styles.photo}>
                <Text style={styles.textLogout}>Chụp ảnh</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={styles.touch}
            >
              <View style={styles.photo}>
                <Text style={styles.textLogout}>Chọn ảnh</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={{ flex: 1, width: "100%" }}>
            <View style={styles.container}>
              {!edit ? (
                <TouchableOpacity
                  onPress={() => {
                    setEdit(!edit);
                    setDisable(!disable);
                  }}
                  style={styles.buttonEdit}
                >
                  <MaterialIcon
                    name="account-edit"
                    size={26}
                    color={colors.darkGreen}
                  />
                </TouchableOpacity>
              ) : (
                <View style={styles.closeAndCheckContain}>
                  <TouchableOpacity
                    onPress={() => {
                      setEdit(!edit);
                      setDisable(!disable);
                    }}
                  >
                    <MaterialIcon
                      name="close"
                      size={26}
                      color={colors.darkGreen}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setEdit(!edit);
                      setDisable(!disable);
                    }}
                  >
                    <MaterialIcon
                      name="check"
                      size={26}
                      color={colors.darkGreen}
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.avatar}>
                <Image
                  source={image === null ? avatar : { uri: image }}
                  style={styles.image}
                />
                {edit && <View style={styles.backgroundCamera} />}
              </View>
              {edit && (
                <TouchableOpacity
                  onPress={() => {
                    bottomSheetRef.current.snapTo(1);
                  }}
                  style={styles.cameraIcon}
                >
                  <MaterialIcon
                    name="camera-outline"
                    style={{ color: "#ddd" }}
                    size={30}
                  />
                </TouchableOpacity>
              )}
              <View style={styles.inforContainer}>
                <Text style={styles.lableInput}>Họ và tên</Text>
                <TextInput
                  value={name}
                  onChangeText={(text) => setName(text)}
                  editable={disable}
                  style={styles.input}
                />
                <Text style={styles.lableInput}>Email</Text>
                <TextInput
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  editable={disable}
                  style={styles.input}
                />
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                  }}
                >
                  <Text style={styles.textGender}>Giới tính:</Text>
                  <View style={styles.genderContainer}>
                    <TouchableOpacity
                      onPress={() => {
                  
                        edit && setGender("male");
                      }}
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.textGender}>Nam</Text>
                      <RadioButton
                        value="male"
                        status={gender === "male" ? "checked" : "unchecked"}
                        onPress={() => {
                          edit && setGender("male");
                        }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                  
                        edit && setGender("female");
                      }}
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.textGender}>Nữ</Text>
                      <RadioButton
                        color="red"
                        value="female"
                        status={gender === "female" ? "checked" : "unchecked"}
                        onPress={() => {
                    
                          edit && setGender("female");
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </View>

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
                    {/* {date.date
                      ? date.date
                          .toLocaleString()
                          .slice(date.date.toLocaleString().indexOf(",") + 2)
                      : ""} */}
                    {moment(date.date).format("DD MMMM YYYY")}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  date={date.date}
                  mode="date"
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
                <View style={styles.buttonContainerLogout}>
                  <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.touch}
                  >
                    <View style={styles.logout}>
                      <Text style={styles.textLogout}>Đăng xuất</Text>
                      <MaterialIcon name="exit-to-app" size={26} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <BottomSheet
              bottomSheerColor="#FFFFFF"
              ref={bottomSheetRef}
              initialPosition={'0%'}
              snapPoints={snapPoints}
              isBackDrop={true}
              isBackDropDismissByPress={true}
              isRoundBorderWithTipHeader={true}
              containerStyle={{background: '#fff'}}
              body={renderContent()}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SettingScreen;
