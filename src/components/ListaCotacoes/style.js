import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listaCotacoesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingVertical: 30,
  },
  botaoFiltro: {
    width: 60,
    height: 40,
    backgroundColor: "#f50d41",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  textoBotaoFiltro: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
