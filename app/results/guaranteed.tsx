import saintQuartz from "@/assets/images/saint-quartz.png";
import summonTicket from "@/assets/images/summon-ticket.png";
import { PITY } from "@/globals/constants";
import guaranteedStyle from "@/styles/guaranteedStyle";
import {
  btn,
  btn__pressed,
  btnText,
  colors,
  container,
  mainContainer,
} from "@/styles/styleConstants";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Guaranteed = () => {
  const { allowance, ticket, total } = useLocalSearchParams();
  const router = useRouter();

  const allowanceNum = parseInt(allowance as string) || 0;
  const ticketNum = parseInt(ticket as string) || 0;
  const totalNum = parseInt(total as string) || 0;

  const remainingTicket = Math.max(ticketNum * 3 - PITY, 0);
  const remainingAllowance = Math.max(allowanceNum - PITY, 0);
  const remainingTotal = totalNum - PITY;

  return (
    <SafeAreaView style={container}>
      <View style={mainContainer}>
        {remainingTicket > 0 && (
          <View style={guaranteedStyle.container}>
            <Image source={summonTicket} style={guaranteedStyle.icon} />
            <Text style={guaranteedStyle.label}>Remaining Ticket</Text>
            <Text
              style={[guaranteedStyle.value, { color: colors.accentTertiary }]}
            >
              {remainingTicket / 3}
            </Text>
          </View>
        )}
        <Image source={saintQuartz} style={guaranteedStyle.icon} />
        {remainingAllowance > 0 && (
          <View style={guaranteedStyle.container}>
            <Text style={guaranteedStyle.label}>Remaining Allowance</Text>
            <Text
              style={[guaranteedStyle.value, { color: colors.accentSecondary }]}
            >
              {remainingAllowance}
            </Text>
          </View>
        )}
        <View style={guaranteedStyle.container}>
          <Text style={guaranteedStyle.label}>Remaining Total</Text>
          <Text
            style={[guaranteedStyle.value, { color: colors.accentPrimary }]}
          >
            {remainingTotal}
          </Text>
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

export default Guaranteed;
