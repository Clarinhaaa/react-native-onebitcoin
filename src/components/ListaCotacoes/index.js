import React, { Fragment } from "react";
import { ScrollView, TouchableOpacity, View, Text } from "react-native";
import styles from "./style";

export default function ListaCotacoes() {
  return (
    <Fragment>
      <View style={styles.listaCotacoesContainer}>
        <TouchableOpacity style={styles.botaoFiltro}>
          <Text style={styles.textoBotaoFiltro}>7D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro}>
          <Text style={styles.textoBotaoFiltro}>15D</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro}>
          <Text style={styles.textoBotaoFiltro}>1M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro}>
          <Text style={styles.textoBotaoFiltro}>3M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoFiltro}>
          <Text style={styles.textoBotaoFiltro}>6M</Text>
        </TouchableOpacity>
      </View>
      {/* <ScrollView /> */}
    </Fragment>
  );
}
