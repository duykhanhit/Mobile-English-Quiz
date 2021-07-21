import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";
import moment from "moment";
import _ from "lodash";
import * as colors from "../../assets/colors";
import IconFontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const ListExamScreen = ({ navigation }) => {
  const { listExams, examState } = useContext(ExamContext);
  const { userState, getUser } = useContext(UserContext);

  // useEffect(() => {
  //
  // }, [userState.dataToken]);

  useState(() => {
    !_.isEmpty(userState.dataToken) && listExams(userState.dataToken.token);
    !_.isEmpty(userState.dataToken) && getUser(userState.dataToken.token);
  }, [userState.dataToken]);

  // const examItem = (item, index) => {
  //   return (
  //     <TouchableOpacity
  //       style={
  //         index === examState.list_exams.length - 1
  //           ? styles.last_item
  //           : styles["exam-blog"]
  //       }
  //       onPress={() => {
  //         navigation.navigate("RulesScreen", { id: item._id });
  //       }}
  //       key={index}
  //     >
  //       <Image
  //         source={require("../../assets/avatar_image.png")}
  //         style={{ width: 72.14, height: 87 }}
  //       />
  //       <View style={styles["custom-text-blog"]}>
  //         <Text
  //           style={styles["title-text-blog"]}
  //           numberOfLines={1}
  //           ellipsizeMode="tail"
  //         >
  //           {item.name}
  //         </Text>
  //         <Text style={styles["common-text-blog"]}>{item.type}</Text>
  //         <Text style={styles["common-text-blog"]}>
  //           {moment(item.createdAt).format("MMMM DD YYYY")}
  //         </Text>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };
  return (
    // <View style={styles.container}>
    //   <StatusBar animated={true} barStyle="dark-content" hidden={false} />
    //   <View style={styles["view-header"]}>
    //     <Text style={styles["view-title"]}>Danh sách đề thi</Text>
    //   </View>
    //   <SafeAreaView style={styles.container}>
    //     <ScrollView style={styles.scrollView}>
    //       <View style={styles["view-list-question"]}>
    //         {examState.list_exams.map((item, index) => {
    //           return examItem(item, index);
    //         })}
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
    // </View>
    <SafeAreaView style={styles.container}>
      <View
        style={{
          borderBottomWidth: 2,
          borderBottomColor: "#FFFDED",
        }}
      >
        <Text style={styles.title}>Danh sách đề thi</Text>
      </View>
      <ScrollView style={styles.containerScrollView}>
        {!_.isEmpty(examState) &&
          examState.list_exams.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("RulesScreen", { id: item._id });
                }}
                key={index}
                style={styles.examedItem}
              >
                <View style={styles.leftItem}>
                  <IconFontAwesome
                    name="book"
                    size={40}
                    color={item.type === "grammar" ? "#A10702" : "#FAA613"}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "column" }}>
                  <Text style={styles.examName}>{item.name}</Text>
                  <View style={styles.rightItem}>
                    <View>
                      <Text style={styles.examType}>Loại đề: {item.type}</Text>
                      <Text style={styles.dateExam}>
                        Ngày tạo: {moment(item.createdAt).format("DD/MM/YYYY")}
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text style={[styles.numberQues]}>Số câu 20</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ListExamScreen;
