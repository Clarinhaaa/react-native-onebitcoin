import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function PrecoAtual() {
  return (
    <View style={styles.precoAtualContainer}>
      <Text style={[styles.texto, styles.textoTitulo]}>ÚTLIMA COTAÇÃO</Text>
      <Text style={[styles.texto, styles.textoPreco]}>R$330.330,72</Text>
    </View>
  );
}
