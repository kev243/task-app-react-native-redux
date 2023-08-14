import React from "react";
import { StyleSheet, Text, View } from "react-native";

const days = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "samedi",
];

const months = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "decembre",
];

export default function Header() {
  const date = new Date();
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{`${days[date.getDay()]}, ${date.getDate()} ${
        months[date.getMonth()]
      }`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 25,
    paddingTop: 20,
  },

  date: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
