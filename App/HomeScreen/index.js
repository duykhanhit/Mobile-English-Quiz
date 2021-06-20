import React from 'react';
import { View, Text, Button } from 'react-native';

import styles from "./styles";

const ListExamScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {navigation.navigate('RulesScreen')}}
        title="Điều lệ thi"
        color="#841584"
      />
    </View>
  )
}

export default ListExamScreen;
