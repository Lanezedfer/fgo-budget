import guideStyle from "@/styles/guideStyle";
import { Text, View } from "react-native";

const Results = () => {
  return (
    <>
      <Text style={guideStyle.header}>Results</Text>
      <Text style={guideStyle.listHeader}>There are 3 possible results:</Text>
      <View style={guideStyle.listContainer}>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>1. Guaranteed: </Text>When Total SQ
          {" >"} Pity and the Servant is ranked EX Tier.
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>2. Priority: </Text>When Total SQ
          {" <"} Pity and the Servant is ranked EX Tier. Best-Case details a
          scenario where Fragments are unused. Worst-Case details a scenario
          where Fragments are used.
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>3. Non-Priority: </Text>When the
          Servant is ranked in A-C Tier.
        </Text>
      </View>
    </>
  );
};

export default Results;
