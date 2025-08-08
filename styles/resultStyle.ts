import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./styleConstants";

const resultStyle = StyleSheet.create({
  // Containers
  resultContainer: {
    flexDirection: "row",
  },
  sectionContainer: {
    alignItems: "center",
    gap: 1,
    paddingBottom: 5,
  },

  // Elements
  resultLabel: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.regular,
  },
  resultValue: {
    color: colors.accentPrimary,
    fontSize: fontSizes.regular,
    fontWeight: "medium",
  },
  title: {
    fontSize: fontSizes.medium,
    fontWeight: "bold",
  },
});

export default resultStyle;
