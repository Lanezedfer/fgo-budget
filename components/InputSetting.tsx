import settingStyle from "@/styles/settingStyle";
import { Text, TextInput, View } from "react-native";

type Props = {
  borderColor: string;
  label: string;
  onChange: (val: string) => void;
  value: string;
};

const InputSetting: React.FC<Props> = ({
  borderColor,
  label,
  onChange,
  value,
}) => (
  <View style={settingStyle.labelContainer}>
    <Text style={settingStyle.label}>{label}</Text>
    <View style={[settingStyle.inputContainer, { borderColor }]}>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        style={settingStyle.input}
      />
      <Text style={settingStyle.inputText}>%</Text>
    </View>
  </View>
);

export default InputSetting;
