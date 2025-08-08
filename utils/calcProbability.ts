import { BONUS_ROLL, SQ_PER_ROLL, SSR_CHANCE } from "@/globals/constants";

type Input = {
  allowance: number;
  amount: number;
  ticket: number;
  total: number;
};

const calcProbability = ({ allowance, amount, ticket, total }: Input) => {
  const fund = Math.floor(amount / SQ_PER_ROLL);
  const bonus = Math.floor(fund / BONUS_ROLL);
  const roll = fund + bonus;

  const probability = 1 - Math.pow(1 - SSR_CHANCE, roll);
  const successRate = (probability * 100).toFixed(2);
  const remainder = amount % SQ_PER_ROLL;

  const remainingTicket = ticket - roll;
  const remainingAllowance = allowance - amount + remainder;
  const remainingTotal = total - amount + remainder;

  return {
    remainder,
    remainingAllowance,
    remainingTicket,
    remainingTotal,
    roll,
    successRate,
  };
};

export default calcProbability;
