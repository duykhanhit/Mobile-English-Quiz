import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import styles from "./styles";
import { Camera } from "expo-camera";
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';

import { YellowBox, LogBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);
LogBox.ignoreAllLogs();
const CameraScreen = ({ navigation, route }) => {
  
  const { callBack } = route.params;
  
  const cam = useRef();
  
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const changeCamera = () => {
    setType(
      type === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  }

  const takePhoto = async () => {
      const options = { quality: 0.5, base64: true, skipProcessing: false};
      try {     
        let photo = await cam.current.takePictureAsync(options);
        const source = photo.uri;
  
        if(source) {
          callBack(source);
          navigation.goBack();
        }
      } catch (error) {
        console.log(error);
      }
  }

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>No access to camera</Text>
      </View>
    );
  }

  return hasPermission === null ? (
    <View />
  ) : (
    <View style={styles.containerCamera}>
      <StatusBar hidden={true} />
      <Camera ref={cam} style={styles.camera} type={type}>
        <View style={styles.buttonTakePhotoContainer}>
          <View style={styles.headerCamera}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconMaterial color="#fff" name="close" size={30}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={changeCamera}>
              <IconMaterial color="#fff" name="camera-retake-outline" size={30}/>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonTake}>
            <TouchableOpacity
              style={styles.button}
              onPress={takePhoto}
            />
          </View>
        </View>
      </Camera>
    </View>
  );
};

export default CameraScreen;
