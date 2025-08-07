import indexStyle from "@/styles/indexStyle";
import { colors } from "@/styles/styleConstants";
import { Image, TextInput, View } from "react-native";

type Props = {
  icon: number;
  onChangeText: (text: string) => void;
  placeholder: string;
  value: string;
};

const InputIndex: React.FC<Props> = ({
  icon,
  onChangeText,
  placeholder,
  value,
}) => (
  <View style={indexStyle.container}>
    <Image source={icon} style={indexStyle.icon} />
    <TextInput
      keyboardType="numeric"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={colors.foregroundSecondary}
      style={indexStyle.input}
    />
  </View>
);

export default InputIndex;
