import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./styleConstants";

const guideStyle = StyleSheet.create({
  // Containers
  container: {
    marginVertical: 10,
    maxWidth: 600,
    paddingHorizontal: 20,
    width: "100%",
  },
  listContainer: {
    paddingBottom: 15,
    paddingLeft: 10,
  },
  tableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },

  // Elements
  header: {
    color: colors.accentPrimary,
    fontSize: fontSizes.medium,
    fontWeight: "bold",
  },
  highlight: {
    color: colors.accentPrimary,
    fontWeight: "medium",
  },
  list: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.small,
    paddingBottom: 1,
  },
  listHeader: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.small,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  text: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.small,
    paddingBottom: 15,
  },
});

export default guideStyle;
