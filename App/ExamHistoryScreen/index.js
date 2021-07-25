import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import _ from "lodash";

import styles from "./styles";
import * as colors from "../../assets/colors";
import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";
import { getExamHistory } from "../../api";


const ExamHistoryScreen = ({ navigation, route }) => {

  const id = route.params.id;
  // console.log(id);
  const { getExamed, examState, exam } = useContext(ExamContext);
  const { userState } = useContext(UserContext);

  const [question, setQuestion] = useState({});
  const [numberQues, setNumberQues] = useState(0);
  const [listQuest, setListQues] = useState([]);
  const [listSelected, setListSelected] = useState([]);
  const [selected, setSelected] = useState({});
  useEffect(() => {
    getExamed(id, userState.dataToken.token);
  }, [id]);

  useEffect(() => {
    !_.isEmpty(listQuest) && setQuestion(listQuest[numberQues]);
    !_.isEmpty(listSelected) && setSelected(listSelected[numberQues]);
  }, [numberQues]);

  useEffect(() => {
    !_.isEmpty(examState.examed.data) &&
      setListQues(examState.examed.data.questions);
    !_.isEmpty(examState.examed.data) &&
      setQuestion(examState.examed.data.questions[numberQues]);
    !_.isEmpty(examState.examed.data) &&
      setListSelected(examState.examed.data.selected);
  }, [examState.examed.data]);

  const Bar = ({ val, index }) => {
    let indexSelected = -1;
    for (var i = 0; i < listSelected.length; i++) {
      switch (listSelected[i].answer_id) {
        case val.answers[0]._id:
          if (val.answers[0].isCorrect) indexSelected = 0;
          break;
        case val.answers[1]._id:
          if (val.answers[1].isCorrect) indexSelected = 1;
          break;
        case val.answers[2]._id:
          if (val.answers[2].isCorrect) indexSelected = 2;
          break;
        case val.answers[3]._id:
          if (val.answers[3].isCorrect) indexSelected = 3;
          break;
        default:
          indexSelected = -1;
          break;
      }
      if (indexSelected > -1) {
        break;
      }
    }
    return (
      <View
        style={[
          indexSelected > -1 ? styles.quizBarSuccess : styles.quizBar,
          numberQues === index && styles.inThisQuesBar,
        ]}
      />
    );
  };

  const handleButtonContinute = () => {
    !_.isEmpty(listQuest) &&
      numberQues === listQuest.length - 1 &&
      navigation.goBack();
    setNumberQues(numberQues + 1);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animatable.View
        animation="bounceInDown"
        useNativeDriver={true}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.textQuesNumber}>Câu hỏi {numberQues + 1}</Text>
          <Text style={styles.totalQuesNumber}>
            / {!_.isEmpty(listQuest) && listQuest.length}
          </Text>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("Thông báo", "Bạn chắc chắn muốn thoát?", [
                {
                  text: "Hủy",
                  onPress: () => {},
                  style: "cancel",
                },
                {
                  text: "Đồng ý",
                  onPress: () => navigation.navigate("HistoryScreen"),
                },
              ]);
            }}
            style={styles.closeIcon}
          >
            <MaterialIcon name="close" color={colors.darkGreen} size={26} />
          </TouchableOpacity>
        </View>
        <View style={styles.quizsBar}>
          {!_.isEmpty(listQuest) &&
            listQuest.map((val, index) => (
              <Bar key={index} val={val} index={index} />
            ))}
        </View>
        <View style={styles.quizContainer}>
          <ScrollView style={styles.quiz}>
            <Text style={styles.question}>
              {!!question && question.content}
            </Text>
          </ScrollView>
        </View>
        {!_.isEmpty(question) &&
          question.answers.map((item, index) => {
            let indexSelected = listSelected.findIndex(
              (s) => s.answer_id === item._id
            );
            return (
              <View key={index} style={styles.answers}>
                <View
                  style={[
                    styles.answer,
                    indexSelected > -1 && styles.selected,
                    item.isCorrect && styles.answerSuccess,
                  ]}
                >
                  <Text style={[{ color: "#000" }]}>
                    {index === 0
                      ? "A"
                      : index === 1
                      ? "B"
                      : index === 2
                      ? "C"
                      : "D"}
                    : {item.content}
                  </Text>
                </View>
              </View>
            );
          })}

        <View style={styles.footer}>
          {numberQues !== 0 && (
            <TouchableOpacity
              onPress={() => {
                setNumberQues(numberQues - 1);
              }}
              style={[styles.touch, { marginRight: 5 }]}
            >
              <View style={styles.previous}>
                <Text style={styles.textPre}>Quay lại</Text>
              </View>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => handleButtonContinute()}
            style={[
              styles.touch,
              !_.isEmpty(listQuest) &&
                numberQues !== 0 &&
                numberQues === listQuest.length && { marginLeft: 5 },
            ]}
          >
            <View style={styles.next}>
              <Text style={styles.textNext}>
                {!_.isEmpty(listQuest) && numberQues !== listQuest.length - 1
                  ? "Tiếp theo"
                  : "Thoát"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ExamHistoryScreen;
