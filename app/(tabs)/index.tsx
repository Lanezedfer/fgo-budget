import fragment from "@/assets/images/fragment.png";
import saintQuartz from "@/assets/images/saint-quartz.png";
import summonTicket from "@/assets/images/summon-ticket.png";
import InputIndex from "@/components/InputIndex";
import {
  btn,
  btn__pressed,
  btnText,
  colors,
  container,
  mainContainer,
} from "@/styles/styleConstants";
import { useMemo, useState } from "react";
import { KeyboardAvoidingView, Pressable, Text } from "react-native";
import RadioGroup, { RadioButtonProps } from "react-native-radio-buttons-group";
import { SafeAreaView } from "react-native-safe-area-context";

const Index = () => {
  const tierOptions: RadioButtonProps[] = useMemo(() => {
    const style = {
      borderColor: colors.accentPrimary,
      color: colors.accentPrimary,
    };

    return ["EX", "A", "B", "C"].map((label, index) => ({
      id: (index + 1).toString(),
      label,
      value: label,
      ...style,
    }));
  }, []);

  const [quartz, setQuartz] = useState("");
  const [tickets, setTickets] = useState("");
  const [fragments, setFragments] = useState("");
  const [tier, setTier] = useState<string>("1");

  return (
    <SafeAreaView style={container}>
      <KeyboardAvoidingView behavior={"height"} style={mainContainer}>
        <InputIndex
          icon={saintQuartz}
          onChangeText={setQuartz}
          placeholder="Input SQ"
          value={quartz}
        />
        <InputIndex
          icon={summonTicket}
          onChangeText={setTickets}
          placeholder="Input Tickets"
          value={tickets}
        />
        <InputIndex
          icon={fragment}
          onChangeText={setFragments}
          placeholder="Input Fragments"
          value={fragments}
        />
        <RadioGroup
          radioButtons={tierOptions}
          onPress={setTier}
          selectedId={tier}
          layout="row"
          labelStyle={{
            color: colors.foregroundPrimary,
            fontSize: 20,
            fontWeight: "medium",
          }}
        />
        <Pressable
          style={({ pressed }) => [
            btn,
            pressed && btn__pressed,
            { paddingHorizontal: 40 },
          ]}
        >
          <Text style={btnText}>Calculate Budget</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Index;
