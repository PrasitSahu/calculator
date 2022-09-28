import React from "react";
import { StyleSheet, Text, Dimensions } from "react-native";
import { TouchableRipple } from "react-native-paper";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4.6;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 25,
  },
  textSecondary: {
    color: "#060606",
  },
  button: {
    backgroundColor: "#333333",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    borderWidth: 1,
    borderColor: "#22ef2",
    height: Math.floor(buttonWidth - 10),
    textAlign: "center",
  },
  buttonDouble: {
    width: screen.width / 1.9 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 40,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#0652DD",
  },
});

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];

  if (size === "double") {
    buttonStyles.push(styles.buttonDouble);
  }

  if (theme === "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === "accent") {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableRipple
      onPress={onPress}
      style={buttonStyles}
      compact={true}
      theme="text"
      dark={true}
    >
      <Text style={textStyles}>{text}</Text>
    </TouchableRipple>
  );
};
