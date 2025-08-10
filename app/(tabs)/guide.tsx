import guideStyle from "@/styles/guideStyle";
import { container } from "@/styles/styleConstants";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Budgeting from "../guide/budgeting";
import Results from "../guide/results";
import Tiers from "../guide/tiers";

const Guide = () => {
  return (
    <SafeAreaView style={[container, { alignItems: "center" }]} edges={["top"]}>
      <ScrollView style={guideStyle.container}>
        <Budgeting />
        <Tiers />
        <Results />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Guide;
