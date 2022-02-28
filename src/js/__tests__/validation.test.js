import validateCharge from '../validation';
import { ERROR_MESSAGE } from '../constants/constants';

describe('로또 구입 금액 유효성 검사 테스트', () => {
  it('구입 금액은 정수인 숫자로 입력해야한다.', () => {
    const notIntegerValue = 'abc';
    expect(() => validateCharge(notIntegerValue)).toThrow(ERROR_MESSAGE.INTEGER_CHARGE_INPUT);
  });

  it('구입 금액은 1000원 이상이어야 한다.', () => {
    const lessThanMinimumValue = 500;
    expect(() => validateCharge(lessThanMinimumValue)).toThrow(ERROR_MESSAGE.CHARGE_INPUT_RANGE);
  });

  it('구입 금액은 5000원 이하여야 한다.', () => {
    const biggerThanMaximumValue = 5500;
    expect(() => validateCharge(biggerThanMaximumValue)).toThrow(ERROR_MESSAGE.CHARGE_INPUT_RANGE);
  });
});
