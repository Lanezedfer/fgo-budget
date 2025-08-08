import Result from "@/components/Result";
import {
  btn,
  btn__pressed,
  btnText,
  container,
  mainContainer,
} from "@/styles/styleConstants";
import calcProbability from "@/utils/calcProbability";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const NonPriority = () => {
  const { allowance, amount, ticket, total } = useLocalSearchParams();
  const router = useRouter();

  const allowanceNum = parseInt(allowance as string) || 0;
  const amountNum = parseInt(amount as string) || 0;
  const ticketNum = parseInt(ticket as string) || 0;
  const totalNum = parseInt(total as string) || 0;

  const tier = calcProbability({
    allowance: allowanceNum,
    amount: amountNum,
    ticket: ticketNum,
    total: totalNum,
  });

  return (
    <SafeAreaView style={container}>
      <View style={mainContainer}>
        <Result label={"Number of Rolls: "} value={`${tier.roll}`} />
        <Result label={"Success Rate: "} value={`${tier.successRate}%`} />
        {tier.remainingTicket > 0 && (
          <Result
            label={"Remaining Ticket: "}
            value={`${tier.remainingTicket}`}
          />
        )}
        {tier.remainingAllowance > 0 && tier.remainingTicket <= 0 && (
          <Result
            label={"Remaining Allowance SQ: "}
            value={`${tier.remainingAllowance}`}
          />
        )}
        <Result
          label={"Remaining Total SQ: "}
          value={`${tier.remainingTotal}`}
        />
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

export default NonPriority;
