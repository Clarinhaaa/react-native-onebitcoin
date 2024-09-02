import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function ItemCotacao() {
  return (
    <View style={styles.itemCotacaoContainer}>
      <View style={styles.logoDataContainer}>
        <Image
          source={require("../../../img/bitcoin.png")}
          style={styles.logoBitcoin}
        />
        <Text style={styles.textos}>02/09/2024</Text>
      </View>
      <View style={styles.precoContainer}>
        <Text style={[styles.textos, { fontWeight: "bold" }]}>
          R$358.670,69
        </Text>
      </View>
    </View>
  );
}
