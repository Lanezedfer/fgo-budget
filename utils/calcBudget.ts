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
    return { allowance, guaranteed: true, ticket, total };
  } else {
    return { allowance, guaranteed: false, ticket, total };
  }
};

export default calcBudget;
