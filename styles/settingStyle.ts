import { StyleSheet } from "react-native";
import { colors, fontSizes } from "./styleConstants";

const settingStyle = StyleSheet.create({
  // Containers
  container: {
    flexDirection: "row",
    gap: 25,
  },
  inputContainer: {
    alignItems: "center",
    borderRadius: 3,
    borderStyle: "solid",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 5,
  },
  labelContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  sectionContainer: {
    alignItems: "center",
    gap: 5,
  },

  // Elements
  input: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.regular,
    textAlign: "center",
    width: 35,
  },
  inputText: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.regular,
  },
  label: {
    color: colors.foregroundPrimary,
    fontSize: fontSizes.medium,
    fontWeight: "medium",
  },
  title: {
    fontSize: fontSizes.medium,
    fontWeight: "bold",
  },
});

export default settingStyle;
