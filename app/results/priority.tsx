import Result from "@/components/Result";
import resultStyle from "@/styles/resultStyle";
import {
  btn,
  btn__pressed,
  btnText,
  colors,
  container,
  mainContainer,
} from "@/styles/styleConstants";
import calcProbability from "@/utils/calcProbability";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Priority = () => {
  const { allowance, ticket, total } = useLocalSearchParams();
  const router = useRouter();

  const allowanceNum = parseInt(allowance as string) || 0;
  const ticketNum = parseInt(ticket as string) || 0;
  const totalNum = parseInt(total as string) || 0;

  const bestCase = calcProbability({
    allowance: allowanceNum,
    amount: allowanceNum,
    ticket: ticketNum,
    total: totalNum,
  });
  const worstCase = calcProbability({
    allowance: allowanceNum,
    amount: totalNum,
    ticket: ticketNum,
    total: totalNum,
  });

  return (
    <SafeAreaView style={container}>
      <View style={mainContainer}>
        <View style={resultStyle.sectionContainer}>
          <Text style={[resultStyle.title, { color: colors.accentTertiary }]}>
            Best Case Scenario
          </Text>
          <Result label={"Number of Rolls: "} value={`${bestCase.roll}`} />
          <Result label={"Success Rate: "} value={`${bestCase.successRate}%`} />
          {bestCase.remainingAllowance > 0 && (
            <Result
              label={"Remaining Allowance SQ: "}
              value={`${bestCase.remainingAllowance}`}
            />
          )}
          <Result
            label={"Remaining Total SQ: "}
            value={`${bestCase.remainingTotal}`}
          />
        </View>
        <View style={resultStyle.sectionContainer}>
          <Text style={[resultStyle.title, { color: colors.accentSecondary }]}>
            Worst Case Scenario
          </Text>
          <Result label={"Number of Rolls: "} value={`${worstCase.roll}`} />
          <Result
            label={"Success Rate: "}
            value={`${worstCase.successRate}%`}
          />
          <Result
            label={"Remaining Total SQ: "}
            value={`${worstCase.remainingTotal}`}
          />
        </View>
        <Pressable
          onPress={() => router.back()}
          style={({ pressed }) => [
            btn,
            pressed && btn__pressed,
            { paddingHorizontal: 40 },
          ]}
        >
          <Text style={btnText}>Return</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Priority;
