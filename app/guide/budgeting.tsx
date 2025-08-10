import guideStyle from "@/styles/guideStyle";
import { Text, View } from "react-native";

const Budgeting = () => {
  return (
    <>
      <Text style={guideStyle.header}>Budgeting</Text>
      <Text style={guideStyle.listHeader}>
        There are 3 types of currencies used in the gacha:
      </Text>
      <View style={guideStyle.listContainer}>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>1. SQ (Saint Quartz): </Text>The
          main currency used to roll the gacha. A single gacha roll requires 3
          SQ.
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>2. Tickets: </Text>A single ticket
          is equivalent to 3 SQ.
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>3. Fragments: </Text>A total of 7
          fragments is equivalent to a single SQ. Unusable for rolling the gacha
          unless manually converted into SQ.
        </Text>
      </View>
      <Text style={guideStyle.text}>
        Do not use Fragments for Non-Priority (A-C) Servants or convert them
        early. Only convert Fragments when needing to roll for a Priority (EX)
        Servant and Allowance is not enough.
      </Text>
      <Text style={guideStyle.listHeader}>How Budget is calculated:</Text>
      <View style={guideStyle.listContainer}>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>• Allowance </Text>= SQ + (Tickets
          × 3)
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>• Backup </Text>= Fragments / 7
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>• Total </Text>= Allowance + Backup
        </Text>
      </View>
    </>
  );
};

export default Budgeting;
