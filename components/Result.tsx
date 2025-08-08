import resultStyle from "@/styles/resultStyle";
import { Text, View } from "react-native";

type Props = {
  label: string;
  value: string;
};

const Result: React.FC<Props> = ({ label, value }) => {
  return (
    <View style={resultStyle.resultContainer}>
      <Text style={resultStyle.resultLabel}>{label}</Text>
      <Text style={resultStyle.resultValue}>{value}</Text>
    </View>
  );
};

export default Result;
