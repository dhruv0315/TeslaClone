import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Button = (props) => {
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress()}
      >
        <Text style={[styles.text, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
      },
      button: {
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 12,
        fontWeight: '500',
        textTransform: 'uppercase',
      }
});
