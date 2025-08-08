import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./styleConstants";

const guaranteedStyle = StyleSheet.create({
  // Containers
  container: {
    alignItems: "center",
  },

  // Elements
  icon: {
    maxHeight: 50,
    maxWidth: 50,
    resizeMode: "contain",
  },
  label: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.medium,
    fontWeight: "medium",
  },
  value: {
    fontSize: fontSizes.medium,
  },
});

export default guaranteedStyle;
