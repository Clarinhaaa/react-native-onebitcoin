import { SafeAreaView, StatusBar, StyleSheet, Platform } from "react-native";
import PrecoAtual from "./src/components/PrecoAtual";
import GraficoHistorico from "./src/components/GraficoHistorico";
import ListaCotacoes from "./src/components/ListaCotacoes";
import ItemCotacao from "./src/components/ListaCotacoes/ItemCotacao";

export default function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar backgroundColor="#f50d41" barStyle="light-content" />
      <PrecoAtual />
      <GraficoHistorico />
      <ListaCotacoes />
      <ItemCotacao />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});