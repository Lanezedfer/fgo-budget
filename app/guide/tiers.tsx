import guideStyle from "@/styles/guideStyle";
import { Text, View } from "react-native";

const Tiers = () => {
  return (
    <>
      <Text style={guideStyle.header}>Tiers</Text>
      <Text style={guideStyle.listHeader}>
        Assign Servants to a tier to manage resources:
      </Text>
      <View style={guideStyle.listContainer}>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>• EX Rank (Priority): </Text> For
          must-get Servants where everything is used, including Backup.
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>• A-C Rank (Non-Priority): </Text>
          For less-critical targets where only Allowance is used.
        </Text>
      </View>

      <Text style={guideStyle.listHeader}>
        There are 2 behavior modes for Non-Priority Tiers:
      </Text>
      <View style={guideStyle.listContainer}>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>1. High Tier ( + ): </Text>If Total
          {" >"} Pity, you have more room to spend.
        </Text>
        <Text style={guideStyle.list}>
          <Text style={guideStyle.highlight}>2. Low Tier ( - ): </Text>If Total
          {" <"} Pity, spend less and hoard for the upcoming EX Tier Servant.
        </Text>
      </View>

      <Text style={guideStyle.listHeader}>
        Non-Priority Tier Default Values (Editable in Settings):
      </Text>
      <View style={guideStyle.tableContainer}>
        <Text style={guideStyle.list}>
          A+ <Text style={guideStyle.highlight}>75%</Text>
        </Text>
        <Text style={guideStyle.list}>
          A- <Text style={guideStyle.highlight}>25%</Text>
        </Text>
      </View>
      <View style={guideStyle.tableContainer}>
        <Text style={guideStyle.list}>
          B+ <Text style={guideStyle.highlight}>50%</Text>
        </Text>
        <Text style={guideStyle.list}>
          B- <Text style={guideStyle.highlight}>10%</Text>
        </Text>
      </View>
      <View style={guideStyle.tableContainer}>
        <Text style={guideStyle.list}>
          C+ <Text style={guideStyle.highlight}>25%</Text>
        </Text>
        <Text style={guideStyle.list}>
          C-{"  "}
          <Text style={guideStyle.highlight}> 5%</Text>
        </Text>
      </View>
      <Text style={guideStyle.text}>
        These percentages determine how much of Allowance gets allocated to the
        specified Non-Priority Tier.
      </Text>
    </>
  );
};

export default Tiers;
