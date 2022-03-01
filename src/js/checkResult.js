import { LOTTERY_TICKET_PRICE, MATCH_RESULT_INDEX, PRIZE_MONEY } from './constants/constants';

export const countWinningNumber = (ticketNumber, winningNumber) =>  
  ticketNumber.filter((number) => winningNumber.includes(number)).length;

export const calculateMatchResult = (tickets, winningNumber, bonusNumber) => {
  const result = new Array(5).fill(0);
  tickets.forEach((ticket) => {
    let matchResult = countWinningNumber(ticket.numbers, winningNumber);
    if ( matchResult < 3 ) return;
    if ( matchResult === 5 && ticket.numbers.includes(bonusNumber)) matchResult = 'BONUS';
    result[MATCH_RESULT_INDEX[matchResult]] += 1;
  });
  return result;
}

export const calculateProfitRatio = (purchasedTicketCount, matchResult) => {
  const purchaseAmount = purchasedTicketCount * LOTTERY_TICKET_PRICE;
  const prizeMoney = PRIZE_MONEY[3] * matchResult[MATCH_RESULT_INDEX[3]]
    + PRIZE_MONEY[4] * matchResult[MATCH_RESULT_INDEX[4]]
    + PRIZE_MONEY[5] * matchResult[MATCH_RESULT_INDEX[5]]
    + PRIZE_MONEY.BONUS * matchResult[MATCH_RESULT_INDEX.BONUS]
    + PRIZE_MONEY[6] * matchResult[MATCH_RESULT_INDEX[6]];
  return prizeMoney / purchaseAmount * 100;
}
