import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./styleConstants";

const indexStyle = StyleSheet.create({
  // Containers
  container: {
    borderColor: colors.accentPrimary,
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 3,
  },

  // Elements
  icon: {
    maxHeight: 50,
    maxWidth: 50,
    resizeMode: "contain",
  },
  input: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.medium,
    width: 170,
  },
});

export default indexStyle;
