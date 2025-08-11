import InputSetting from "@/components/InputSetting";
import settingStyle from "@/styles/settingStyle";
import {
  btn,
  btn__pressed,
  btnText,
  colors,
  container,
  mainContainer,
} from "@/styles/styleConstants";
import { DEFAULT, loadSetting, SettingKey } from "@/utils/loadSetting";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const highRanks: { key: SettingKey; label: string }[] = [
  { key: "aHigh", label: "A+ Rank" },
  { key: "bHigh", label: "B+ Rank" },
  { key: "cHigh", label: "C+ Rank" },
];

const lowRanks: { key: SettingKey; label: string }[] = [
  { key: "aLow", label: "A- Rank" },
  { key: "bLow", label: "B- Rank" },
  { key: "cLow", label: "C- Rank" },
];

const Setting = () => {
  const [setting, setSetting] = useState(DEFAULT);

  useEffect(() => {
    const loadAndSet = async () => {
      const loaded = await loadSetting();
      setSetting(loaded);
    };
    loadAndSet();
  }, []);

  const handleChange = (key: SettingKey, value: string) => {
    if (value.length > 2) value = value.slice(0, 2);
    setSetting((prev) => ({ ...prev, [key]: value }));
  };

  const saveSetting = async () => {
    await AsyncStorage.setItem("@fgo-budget:setting", JSON.stringify(setting));
  };

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView behavior={"height"} style={mainContainer}>
        <View style={settingStyle.container}>
          <View style={settingStyle.sectionContainer}>
            <Text
              style={[settingStyle.title, { color: colors.accentTertiary }]}
            >
              High Tier
            </Text>
            {highRanks.map(({ key, label }) => (
              <InputSetting
                key={key}
                label={label}
                value={setting[key]}
                onChange={(val) => handleChange(key, val)}
                borderColor={colors.accentTertiary}
              />
            ))}
          </View>
          <View style={settingStyle.sectionContainer}>
            <Text
              style={[settingStyle.title, { color: colors.accentSecondary }]}
            >
              Low Tier
            </Text>
            {lowRanks.map(({ key, label }) => (
              <InputSetting
                key={key}
                label={label}
                value={setting[key]}
                onChange={(val) => handleChange(key, val)}
                borderColor={colors.accentSecondary}
              />
            ))}
          </View>
        </View>
        <Pressable
          onPress={saveSetting}
          style={({ pressed }) => [
            btn,
            pressed && btn__pressed,
            { paddingHorizontal: 20 },
          ]}
        >
          <Text style={btnText}>Save Setting</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Setting;
