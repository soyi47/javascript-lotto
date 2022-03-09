import { countMatchNumber, calculateMatchResult, calculateProfitRatio } from '../checkResult';
import LotteryTicket from '../LotteryTicket';

describe('결과 확인 테스트', () => {
  let winningNumber;
  let ticketNumber;

  beforeEach(() => {
    winningNumber = [12, 28, 22, 37, 19, 23];
    ticketNumber = [
      [12, 28, 22, 37, 19, 23], // 6개 일치
      [12, 28, 22, 37, 19, 21], // 5개 일치 + 보너스 일치
      [12, 28, 22, 37, 19, 45], // 5개 일치
      [12, 28, 22, 37, 14, 20], // 4개 일치
      [12, 28, 22, 31, 34, 45], // 3개 일치
      [12, 28, 30, 31, 34, 45], // 2개 일치
    ];  
  })

  it('주어진 로또 숫자와 당첨 번호가 일치하는 숫자의 개수를 확인한다.', () => {
    expect(countMatchNumber(ticketNumber[0], winningNumber)).toEqual(6);
    expect(countMatchNumber(ticketNumber[2], winningNumber)).toEqual(5);
    expect(countMatchNumber(ticketNumber[3], winningNumber)).toEqual(4);
    expect(countMatchNumber(ticketNumber[4], winningNumber)).toEqual(3);
    expect(countMatchNumber(ticketNumber[5], winningNumber)).toEqual(2);
  });

  it('주어진 로또 숫자와, 당첨 번호, 보너스 숫자의 최종 일치 결과를 확인한다.', () => {
    const bonusNumber = 21;
    const lottoTicket = [
      new LotteryTicket(ticketNumber[0]), // 6개 일치
      new LotteryTicket(ticketNumber[1]), // 5개 일치 + 보너스 일치
      new LotteryTicket(ticketNumber[2]), // 5개 일치
      new LotteryTicket(ticketNumber[3]), // 4개 일치
      new LotteryTicket(ticketNumber[4]), // 3개 일치
    ];

    const expectedResult = [1, 1, 1, 1, 1];
    expect(calculateMatchResult(lottoTicket, winningNumber, bonusNumber)).toEqual(expectedResult);
  });

  it('주어진 로또 티켓 수와 최종 일치 결과로 수익률을 계산한다.', () => {
    const purchasedTicketCount = 5;
    const matchResult = [1, 0, 0, 0, 0]; // 3개 일치 하나 당첨
    
    const expectedResult = 100; // 수익률 100%
    expect(calculateProfitRatio(purchasedTicketCount, matchResult)).toEqual(expectedResult);
  });
});
