import React from "react";
import { View, Image } from "react-native";
import { styles } from "./Styles";
import { Logo } from "../components/Logo/Logo";
import { PassButton } from "../components/Button/PassButton";

export default function Home() {
  return (
    <View style={styles.container}>
        <Logo/>
        <PassButton/>
    </View>
  );
}