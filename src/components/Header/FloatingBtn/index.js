import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function FloatingBtn({ toggle, isOpen }) {
  return (
    <Pressable onPress={toggle} style={styles.btn}>
      <Text style={styles.txt}>{isOpen ? "x" : "+"}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    right: 20,
    bottom: 50,
    height: 60,
    width: 60,
    justifyContent: "center",
    backgroundColor: "orange",
    borderRadius: 50,
  },
  txt: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
});
