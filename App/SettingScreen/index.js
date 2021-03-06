import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  createRef,
  useCallback,
} from "react";
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
  ActivityIndicator,
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
import * as colors from "../../assets/colors";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { Alert } from "react-native";

const SettingScreen = ({ navigation }) => {
  const { userState, updateUser, logout, changePass } = useContext(UserContext);
  const [focusInput, setFocusInput] = useState(false);
  //
  const bottomSheetRef = createRef();
  const snapPoints = useMemo(() => ["0%", "50%"], []);
  const bottomSheetRefChangePass = createRef();
  const snapPointsChangePass = useMemo(() => ["0%", "80%"], []);

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
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errorUserName, setErrorUserName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorOldPass, setErrorOldPass] = useState(false);
  const [errorNewPass, setErrorNewPass] = useState(false);
  const [errorConfirmPass, setErrorConfirmPass] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
      setImage(`http://13.229.240.165:3000${userState.me.data.avatar}`);
    }
  }, [userState]);

  useEffect(() => {
    isLoading && setTimeout(() => setIsLoading(false), 3000);
  }, [isLoading]);

  const takePhotoFromCamera = () => {
    navigation.navigate("CameraScreen", {
      setImage,
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

  const handleCancelEdit = () => {
    setEdit(!edit);
    setDisable(!disable);
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
      setImage(`http://13.229.240.165:3000${userState.me.data.avatar}`);
    }
  };

  const renderContent = () => {
    return (
      <View style={styles.buttonsAvatar}>
        <Text style={styles.textUploadPhoto}>T???i ???nh l??n</Text>
        <Text style={styles.textChoosePhoto}>Ch???n ???nh ?????i di???n c???a b???n</Text>
        <View style={styles.buttonsUpload}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={takePhotoFromCamera}
              style={styles.touch}
            >
              <View style={styles.photo}>
                <Text style={styles.textLogout}>Ch???p ???nh</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={choosePhotoFromLibrary}
              style={styles.touch}
            >
              <View style={styles.photo}>
                <Text style={styles.textLogout}>Ch???n ???nh</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderContentChangePass = () => {
    return (
      <View style={styles.buttonsChangePass}>
        <Text style={styles.lableInput}>Nh???p m???t kh???u hi???n t???i</Text>
        <TextInput
          secureTextEntry={true}
          onFocus={() => setIsFocus(true)}
          onEndEditing={() => handleEndEditingOldPass()}
          value={oldPass}
          onChangeText={(text) => setOldPass(text)}
          style={styles.input}
        />
        {errorOldPass && (
          <Error error="M???t kh???u hi???n t???i kh??ng ???????c ????? tr???ng!" />
        )}
        <Text style={styles.lableInput}>Nh???p m???t kh???u m???i</Text>
        <TextInput
          secureTextEntry={true}
          onFocus={() => setIsFocus(true)}
          onEndEditing={() => handleEndEditingNewPass()}
          value={newPass}
          onChangeText={(text) => setNewPass(text)}
          style={styles.input}
        />
        {errorNewPass && <Error error="M???t kh???u ??t nh???t 6 k?? t??? v?? kh??ng ch???a d???u c??ch!" />}
        <Text style={styles.lableInput}>X??c nh???n m???t kh???u m???i</Text>
        <TextInput
          secureTextEntry={true}
          onFocus={() => setIsFocus(true)}
          onEndEditing={() => handleEndEditingConfirmPass()}
          value={confirmPass}
          onChangeText={(text) => setConfirmPass(text)}
          style={styles.input}
        />
        {errorConfirmPass && <Error error="X??c nh???n m???t kh???u kh??ng kh???p!" />}
        <View style={styles.buttonContainerConfirmChangePass}>
          <TouchableOpacity onPress={handleChangePass} style={styles.touch}>
            <View style={styles.btnConfirmChangePass}>
              <MaterialIcon name="check" size={26} color="#fff" />
              <Text style={styles.textLogout}>X??c nh???n thay ?????i</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const rePas = /\S/;
  const handleUpdateUser = () => {
    if (errorUserName || errorEmail) {
      Alert.alert("B???n c???n nh???p ????ng y??u c???u!");
      return;
    }
    setEdit(!edit);
    setDisable(!disable);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("gender", gender);
    formData.append("birthday", moment(date.date).format("YYYY/MM/DD"));
    formData.append("avatar", {
      uri: image,
      name: `${userState.me.data._id}.jpg`,
      type: "image/jpeg",
    });
    !_.isEmpty(userState.dataToken) &&
      updateUser(formData, userState.dataToken.token);
    setIsLoading(true);
  };

  const Error = ({ error }) => {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.textError}>{error}</Text>
      </View>
    );
  };

  const handleEndEditingName = () => {
    if (_.isEmpty(name)) {
      setErrorUserName(true);
    } else {
      setErrorUserName(false);
    }
    setIsFocus(false);
  };

  const handleEndEditingEmail = () => {
    if (!re.test(String(email).toLowerCase())) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
    }
    setIsFocus(false);
  };

  const handleEndEditingOldPass = () => {
    if (_.isEmpty(oldPass)) {
      setErrorOldPass(true);
    } else {
      setErrorOldPass(false);
    }
    setIsFocus(false);
  };

  const handleEndEditingNewPass = () => {
    if (!rePas.test(newPass) && newPass.trim().length < 6) {
      setErrorNewPass(true);
    } else {
      setErrorNewPass(false);
    }
    setIsFocus(false);
  };

  const handleEndEditingConfirmPass = () => {
    if (confirmPass !== newPass) {
      setErrorConfirmPass(true);
    } else {
      setErrorConfirmPass(false);
    }
    setIsFocus(false);
  };

  const handleChangePass = () => {
    if (errorConfirmPass || errorOldPass || errorNewPass) {
      Alert.alert("B???n c???n nh???p ????ng y??u c???u!");
      return;
    }
    setIsLoading(true);
    changePass(oldPass, newPass, userState.dataToken.token, {
      success: () => {
        setIsLoading(false);
        Alert.alert("Thay ?????i m???t kh???u th??nh c??ng!");
      },
      failed: () => {
        setIsLoading(false);
        Alert.alert("Thay ?????i m???t kh???u kh??ng th??nh c??ng. Vui l??ng th??? l???i!");
      },
    });
  };

  if (isLoading)
    return (
      <View
        style={{
          justifyContent: "center",
          width: "100%",
          flex: 1,
          backgroundColor: "#FFFDED",
        }}
      >
        <ActivityIndicator size="small" color={colors.mainGreen} />
      </View>
    );

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
                  <TouchableOpacity onPress={() => handleCancelEdit()}>
                    <MaterialIcon
                      name="close"
                      size={26}
                      color={colors.darkGreen}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => !isFocus && handleUpdateUser()}
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
                <Text style={styles.lableInput}>H??? v?? t??n</Text>
                <TextInput
                  onFocus={() => setIsFocus(true)}
                  onEndEditing={() => handleEndEditingName()}
                  value={name}
                  onChangeText={(text) => setName(text)}
                  editable={disable}
                  style={styles.input}
                />
                {errorUserName && <Error error="T??n kh??ng ???????c ????? tr???ng!" />}
                <Text style={styles.lableInput}>Email</Text>
                <TextInput
                  onFocus={() => setIsFocus(true)}
                  onEndEditing={() => handleEndEditingEmail()}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                  editable={disable}
                  style={styles.input}
                />
                {errorEmail && (
                  <Error error="Vui l??ng nh???p ????ng ?????nh d???ng email!" />
                )}
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 10,
                  }}
                >
                  <Text style={styles.textGender}>Gi???i t??nh:</Text>
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
                      <Text style={styles.textGender}>N???</Text>
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

                <Text style={styles.lableInput}>Ng??y sinh</Text>
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
                  <Text>{moment(date.date).format("DD/MM/YYYY")}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  maximumDate={new Date()}
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
                <View style={styles.buttonContainerChangePass}>
                  <TouchableOpacity
                    onPress={() => {
                      bottomSheetRefChangePass.current.snapTo(1);
                      setErrorNewPass(false);
                      setErrorOldPass(false);
                      setErrorConfirmPass(false);
                      setNewPass('');
                      setOldPass('');
                      setConfirmPass('');
                    }}
                    style={styles.touch}
                  >
                    <View style={styles.btnChangePass}>
                      <Text style={styles.textLogout}>Thay ?????i m???t kh???u</Text>
                      <MaterialIcon name="key" size={26} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
              {!edit && (
                <View style={styles.buttonContainerLogout}>
                  <TouchableOpacity
                    onPress={() => logout()}
                    style={styles.touch}
                  >
                    <View style={styles.logout}>
                      <Text style={styles.textLogout}>????ng xu???t</Text>
                      <MaterialIcon name="exit-to-app" size={26} color="#fff" />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <BottomSheet
              bottomSheerColor="#FFFFFF"
              ref={bottomSheetRef}
              initialPosition={"0%"}
              snapPoints={snapPoints}
              isBackDrop={true}
              isBackDropDismissByPress={true}
              isRoundBorderWithTipHeader={true}
              containerStyle={{ background: "#fff" }}
              body={renderContent()}
            />
            <BottomSheet
              bottomSheerColor="#FFFFFF"
              ref={bottomSheetRefChangePass}
              initialPosition={"0%"}
              snapPoints={snapPointsChangePass}
              isBackDrop={true}
              isBackDropDismissByPress={true}
              isRoundBorderWithTipHeader={true}
              containerStyle={{ background: "#fff" }}
              body={renderContentChangePass()}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SettingScreen;
