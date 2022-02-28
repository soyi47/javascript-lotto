import { countWinningNumber, calculateMatchResult } from '../checkResult';
import Lotto from '../Lotto';

describe('결과 확인 테스트', () => {

  it('주어진 로또 숫자와 당첨 번호가 일치하는 숫자의 개수를 확인한다.', () => {
    const lottos = [
      [12, 28, 22, 37, 19, 23], // 6개 일치
      [12, 28, 22, 37, 19, 21], // 5개 일치
      [12, 28, 22, 37, 14, 20], // 4개 일치
      [12, 28, 22, 31, 34, 45], // 3개 일치
      [12, 28, 30, 31, 34, 45], // 2개 일치
    ]
    const winningNumber = [12, 28, 22, 37, 19, 23];

    expect(countWinningNumber(lottos[0], winningNumber)).toEqual(6);
    expect(countWinningNumber(lottos[1], winningNumber)).toEqual(5);
    expect(countWinningNumber(lottos[2], winningNumber)).toEqual(4);
    expect(countWinningNumber(lottos[3], winningNumber)).toEqual(3);
    expect(countWinningNumber(lottos[4], winningNumber)).toEqual(2);
  });

  it('주어진 로또 숫자와, 당첨 번호, 보너스 숫자의 최종 일치 결과를 확인한다.', () => {
    const lottos = [
      new Lotto([12, 28, 22, 37, 19, 23]), // 6개 일치
      new Lotto([12, 28, 22, 37, 19, 21]), // 5개 일치 + 보너스 일치
      new Lotto([12, 28, 22, 37, 19, 45]), // 5개 일치
      new Lotto([12, 28, 22, 37, 14, 20]), // 4개 일치
      new Lotto([12, 28, 22, 31, 34, 45]), // 3개 일치
    ];
    const winningNumber = [12, 28, 22, 37, 19, 23];
    const bonusNumber = 21;

    const expectedResult = [1, 1, 1, 1, 1];
    expect(calculateMatchResult(lottos, winningNumber, bonusNumber)).toEqual(expectedResult);
  });
});
