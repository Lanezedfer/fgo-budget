import { router } from "expo-router";
import calcBudget from "./calcBudget";

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
    }
  }
};

export default submitBudget;
