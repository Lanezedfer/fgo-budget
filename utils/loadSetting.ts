import AsyncStorage from "@react-native-async-storage/async-storage";

export type SettingKey = keyof typeof DEFAULT;

export const DEFAULT = {
  aHigh: "75",
  bHigh: "50",
  cHigh: "25",
  aLow: "25",
  bLow: "10",
  cLow: "5",
};

export const loadSetting = async () => {
  const saved = await AsyncStorage.getItem("@fgo-budget:setting");
  return saved ? JSON.parse(saved) : DEFAULT;
};
