export const LOTTERY_TICKET_PRICE = 1000;
export const LOTTERY_TICKET_NUMBER = {
  MIN: 1,
  MAX: 45,
  LENGTH: 6,
};

export const MAX_NUMBER_PURCHASE = 5;

export const MIN_CHARGE_INPUT = 1000;
export const MAX_CHARGE_INPUT = 5000;

export const ERROR_MESSAGE = {
  CHARGE_INPUT_NOT_INTEGER: '구입할 금액은 정수로 입력해주세요.',
  CHARGE_INPUT_NOT_IN_RANGE: `구입할 금액은 ${MIN_CHARGE_INPUT}원 이상, ${MAX_CHARGE_INPUT}원 이하로 입력해주세요. `,
  WINNING_NUMBERS_INSUFFICIENT: '당첨 번호 6개, 보너스 번호 1개를 입력해주세요.',
  WINNING_NUMBERS_NOT_INTEGER: '당첨 번호와 보너스 번호는 정수로 입력해주세요.',
  WINNING_NUMBERS_NOT_IN_RANGE: '당첨 번호와 보너스 번호는 1 이상 45 이하 범위 내로 입력해주세요.',
  WINNING_NUMBERS_DUPLICATED: '당첨 번호와 보너스 번호에 중복이 있습니다.',
  NO_PURCHASED_TICKET: '구입한 티켓이 없습니다.',
  CAN_NOT_PURCHASE: `복권은 최대 ${MAX_NUMBER_PURCHASE}장까지 구입 가능합니다. 더 이상 구입할 수 없습니다.`
};

export const MATCH_RESULT_INDEX = {
  3: 0,
  4: 1,
  5: 2,
  BONUS: 3,
  6: 4
}

export const PRIZE_MONEY = {
  3: 5000,
  4: 50000,
  5: 1500000,
  BONUS: 30000000,
  6: 2000000000
}
