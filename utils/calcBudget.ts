import { PITY } from "@/globals/constants";

type Input = {
  fragment: number;
  sq: number;
  ticket: number;
};

const calcBudget = ({ fragment, sq, ticket }: Input) => {
  const allowance = sq + ticket * 3;
  const backup = Math.floor(fragment / 7);
  const total = allowance + backup;

  if (total >= PITY) {
    const amount = total - PITY;
    return { allowance, amount, guaranteed: true, ticket, total };
  } else {
    const amount = allowance;
    return { allowance, amount, guaranteed: false, ticket, total };
  }
};

export default calcBudget;
