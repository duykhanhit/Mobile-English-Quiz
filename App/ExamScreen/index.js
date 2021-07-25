import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  BackHandler,
} from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import _ from "lodash";

import styles from "./styles";
import * as colors from "../../assets/colors";
import { ExamContext } from "../../contexts/GlobalState/GlobalExamState";
import { UserContext } from "../../contexts/GlobalState/GlobaleUserState";

const ExamScreen = ({ navigation, route }) => {
  const [countDownDate, setCountDownDate] = useState(1200000);
  // const [now, setNow] = useState(0);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const id = route.params.id;
  const { getExam, exam, submitAnswer } = useContext(ExamContext);
  const { userState } = useContext(UserContext);

  const [disableSubmit, setDisableSubmit] = useState(false);

  const [selected, setSelected] = useState({
    cauA: false,
    cauB: false,
    cauC: false,
    cauD: false,
  });

  const [listQues, setListQues] = useState([]);

  const [displayQues, setDisplayQues] = useState({
    question: "",
    cauA: "",
    cauB: "",
    cauC: "",
    cauD: "",
  });

  const [numberQues, setNumberQues] = useState(0);

  useEffect(() => {
    const backAction = () => {
      Alert.alert("Thông báo", "Bạn chắc chắn muốn thoát?", [
        {
          text: "Hủy",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "Đồng ý",
          onPress: () =>
            navigation.navigate("ExamedScreen", {
              resultId: exam.result,
              totalQuesNumber: !_.isEmpty(exam.data) ? exam.data.length : 0,
            }),
        },
      ]);
      return true;
    };

    BackHandler.addEventListener("hardwareBackPress", backAction);
  }, []);

  useEffect(() => {
    !_.isEmpty(listQues) && setDisplayQues(listQues[numberQues]);
  }, [numberQues, listQues]);

  useEffect(() => {
    getExam(id, userState.dataToken.token);
  }, [id]);

  useEffect(() => {
    let arr = [];
    arr =
      !_.isEmpty(exam.data) &&
      exam.data.map((item) => {
        return {
          question: item.content,
          cauA: item.answers[0].content,
          cauB: item.answers[1].content,
          cauC: item.answers[2].content,
          cauD: item.answers[3].content,
          choseA: false,
          choseB: false,
          choseC: false,
          choseD: false,
          touched: false,
        };
      });
    setListQues(arr);
  }, [exam]);

  const Bar = ({ touched, index }) => {
    return (
      <View
        style={[
          touched ? styles.quizBarTouched : styles.quizBar,
          ,
          numberQues === index && styles.inThisQuesBar,
        ]}
      />
    );
  };

  useEffect(() => {
    if (!_.isEmpty(listQues)) {
      if (listQues[numberQues].choseA) {
        setSelected({
          cauA: true,
          cauB: false,
          cauC: false,
          cauD: false,
        });
      } else if (listQues[numberQues].choseB) {
        setSelected({
          cauA: false,
          cauB: true,
          cauC: false,
          cauD: false,
        });
      } else if (listQues[numberQues].choseC) {
        setSelected({
          cauA: false,
          cauB: false,
          cauC: true,
          cauD: false,
        });
      } else if (listQues[numberQues].choseD) {
        setSelected({
          cauA: false,
          cauB: false,
          cauC: false,
          cauD: true,
        });
      } else {
        setSelected({
          cauA: false,
          cauB: false,
          cauC: false,
          cauD: false,
        });
      }
    }
  }, [listQues[numberQues]]);

  useEffect(() => {
    setTimeout(() => {
      setDisableSubmit(false);
    }, 1500);
  }, [numberQues]);

  const handleButtonContinute = () => {
    let index = -1;
    let indexAnswer = -1;
    for (const property in selected) {
      index++;
      if (selected[property] && !_.isEmpty(listQues)) {
        indexAnswer = index;
        setListQues([
          ...listQues.slice(0, numberQues),
          { ...listQues[numberQues], touched: true },
          ...listQues.slice(numberQues + 1),
        ]);
      }
    }
    if (!_.isEmpty(exam) && indexAnswer !== -1) {
      const resultId = exam.result;
      const answerId = exam.data[numberQues].answers[indexAnswer]._id;
      const questionId = exam.data[numberQues]._id;
      submitAnswer(questionId, resultId, answerId, userState.dataToken.token);
    }
    if (!_.isEmpty(exam) && indexAnswer === -1) {
      setListQues([
        ...listQues.slice(0, numberQues),
        { ...listQues[numberQues], touched: false },
        ...listQues.slice(numberQues + 1),
      ]);
      submitAnswer(
        exam.data[numberQues]._id,
        exam.result,
        null,
        userState.dataToken.token
      );
    }
    setSelected({
      cauA: false,
      cauB: false,
      cauC: false,
      cauD: false,
    });
    if (!_.isEmpty(exam.data) && numberQues === exam.data.length - 1) {
      navigation.navigate("ExamedScreen", {
        resultId: exam.result,
        totalQuesNumber: exam.data.length,
      });
    }
    if (!_.isEmpty(exam.data) && numberQues < exam.data.length - 1) {
      setNumberQues(numberQues + 1);
    }
  };

  useEffect(() => {
    if (countDownDate === 0) {
      Alert.alert("Thời gian làm bài thi đã hết.");
      navigation.navigate("ExamedScreen", {
        resultId: exam.result,
        totalQuesNumber: !_.isEmpty(exam.data) ? exam.data.length : 0,
      });
    } else {
      setTimeout(() => {
        var distance = countDownDate - 1000;
        setCountDownDate(distance);
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      }, 1000);
    }
  }, [countDownDate]);

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
            /{!_.isEmpty(exam.data) && exam.data.length}
          </Text>
          <View style={styles.closeIcon}>
            <Text style={styles.timeInterval}>
              Thời gian còn lại:{" "}
              <Text style={styles.time}>
                {minutes}:{seconds}
              </Text>
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
                    onPress: () =>
                      navigation.navigate("ExamedScreen", {
                        resultId: exam.result,
                        totalQuesNumber: exam.data.length,
                      }),
                  },
                ]);
              }}
            >
              <MaterialIcon name="close" color={colors.darkGreen} size={26} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.quizsBar}>
          {!_.isEmpty(listQues) &&
            listQues.map((val, index) => (
              <Bar key={index} touched={val.touched} index={index} />
            ))}
        </View>
        <View style={styles.quizContainer}>
          <ScrollView style={styles.quiz}>
            <Text style={styles.question}>{displayQues.question}</Text>
          </ScrollView>
        </View>
        <View style={styles.answers}>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: !selected.cauA,
                cauB: false,
                cauC: false,
                cauD: false,
              });
              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  choseA: !listQues[numberQues].choseA,
                  choseB: false,
                  choseD: false,
                  choseC: false,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseA &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseA
                  ? styles.textSelected
                  : { color: "#000" },
              ]}
            >
              A: {displayQues.cauA}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: false,
                cauB: !selected.cauB,
                cauC: false,
                cauD: false,
              });
              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  ...listQues[numberQues],
                  choseA: false,
                  choseD: false,
                  choseC: false,
                  choseB: !listQues[numberQues].choseB,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseB &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseB
                  ? styles.textSelected
                  : { color: "#000" },
              ]}
            >
              B: {displayQues.cauB}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: false,
                cauB: false,
                cauC: !selected.cauC,
                cauD: false,
              });

              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  choseA: false,
                  choseB: false,
                  choseD: false,
                  choseC: !listQues[numberQues].choseC,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseC &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseC
                  ? styles.textSelected
                  : { color: "#000" },
              ]}
            >
              C: {displayQues.cauC}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSelected({
                cauA: false,
                cauB: false,
                cauC: false,
                cauD: !selected.cauD,
              });
              setListQues([
                ...listQues.slice(0, numberQues),
                {
                  ...listQues[numberQues],
                  choseA: false,
                  choseB: false,
                  choseC: false,
                  choseD: !listQues[numberQues].choseD,
                },
                ...listQues.slice(numberQues + 1),
              ]);
            }}
            style={[
              styles.answer,
              !_.isEmpty(listQues) &&
                listQues[numberQues].choseD &&
                styles.selected,
            ]}
          >
            <Text
              style={[
                !_.isEmpty(listQues) && listQues[numberQues].choseD
                  ? styles.textSelected
                  : { color: "#000" },
              ]}
            >
              D: {displayQues.cauD}
            </Text>
          </TouchableOpacity>
        </View>
        {disableSubmit ? (
          <View style={{ justifyContent: "center", width: "100%" }}>
            <ActivityIndicator size="small" color={colors.mainGreen} />
          </View>
        ) : (
          <View style={styles.footer}>
            {!_.isEmpty(exam.data) && numberQues !== 0 && (
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
                !_.isEmpty(exam.data) &&
                  numberQues !== 0 &&
                  numberQues === exam.data.length && { marginLeft: 5 },
              ]}
            >
              <View style={styles.next}>
                <Text style={styles.textNext}>
                  {!_.isEmpty(exam.data) && numberQues !== exam.data.length - 1
                    ? "Tiếp theo"
                    : "Nộp bài"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default ExamScreen;
