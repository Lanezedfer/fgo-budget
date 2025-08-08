import { router } from "expo-router";
import calcBudget from "./calcBudget";
import { loadSetting } from "./loadSetting";

type Input = {
  fragments: string;
  quartz: string;
  tickets: string;
  tier: string;
};

const submitBudget = async ({ fragments, quartz, tickets, tier }: Input) => {
  const sq = parseInt(quartz) || 0;
  const ticket = parseInt(tickets) || 0;
  const fragment = parseInt(fragments) || 0;

  const result = calcBudget({ fragment, sq, ticket });

  const setting = await loadSetting();
  const tiers: Record<string, number> = {
    "2": result.guaranteed ? setting.aHigh : setting.aLow,
    "3": result.guaranteed ? setting.bHigh : setting.bLow,
    "4": result.guaranteed ? setting.cHigh : setting.cLow,
  };
  const allocation = tiers[tier];

  if (tier === "1") {
    if (result.guaranteed) {
      router.push({
        pathname: "/results/guaranteed",
        params: {
          allowance: result.allowance.toString(),
          ticket: result.ticket.toString(),
          total: result.total.toString(),
        },
      });
    } else {
      router.push({
        pathname: "/results/priority",
        params: {
          allowance: result.allowance.toString(),
          ticket: result.ticket.toString(),
          total: result.total.toString(),
        },
      });
    }
  } else {
    const amount = result.amount * (allocation / 100);
    router.push({
      pathname: "/results/nonPriority",
      params: {
        allowance: result.allowance.toString(),
        amount: amount.toString(),
        ticket: result.ticket.toString(),
        total: result.total.toString(),
      },
    });
  }
};

export default submitBudget;
