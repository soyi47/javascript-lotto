import { $, $$ } from '../utils/util';
import { lottoListTemplate, lottoTotalNumber } from './template';
import { MATCH_RESULT_INDEX, PRIZE_MONEY, SELECTOR } from '../constants/constants';

const CLASS_DISPLAY_NONE = 'display-none';

export default class LottoMachineView {
  constructor() {
    this.resultModalArea = $('#result-modal-area');
    this.showLottoList = {
      icon: this.showLottoIconList,
      number: this.showLottoNumberList,
    };
  }

  initialize(lottos) {
    this.initializeInputValues();
    this.updateLottoList(lottos);
    this.closeWinningResultModal();
  }

  updateChargeInput(value) {
    $(SELECTOR.CHARGE_INPUT).value = value;
  }

  updateLottoList(lottos) {
    $(SELECTOR.LOTTO_TOTAL_NUMBER).innerHTML = lottoTotalNumber(lottos.length);
    $(SELECTOR.LOTTO_LIST_ICON).innerHTML = lottoListTemplate.icon(lottos.length);
    $(SELECTOR.LOTTO_LIST_NUMBER).innerHTML = lottoListTemplate.number(lottos);
  }

  showLottoIconList() {
    $(SELECTOR.LOTTO_LIST_ICON).classList.remove(CLASS_DISPLAY_NONE);
    $(SELECTOR.LOTTO_LIST_NUMBER).classList.add(CLASS_DISPLAY_NONE);
  }

  showLottoNumberList() {
    $(SELECTOR.LOTTO_LIST_ICON).classList.add(CLASS_DISPLAY_NONE);
    $(SELECTOR.LOTTO_LIST_NUMBER).classList.remove(CLASS_DISPLAY_NONE);
  }

  openWinningResultModal(result) {
    this.updateWinningResultModal(result);
    this.resultModalArea.classList.remove(CLASS_DISPLAY_NONE);
  }

  closeWinningResultModal() {
    this.resultModalArea.classList.add(CLASS_DISPLAY_NONE);
  }

  updateWinningResultModal({ matchResult, profitRatio }) {
    $$('.match-result', this.resultModalArea).forEach((resultRow) => {
      $('.match-count', resultRow).innerText = `${matchResult[MATCH_RESULT_INDEX[resultRow.dataset.matchCount]]}개`;
      $('.prize-money', resultRow).innerText = PRIZE_MONEY[resultRow.dataset.matchCount].toLocaleString();
    })
    $('#profit-ratio', this.resultModalArea).innerText = Math.round(profitRatio);
  }
  
  initializeInputValues() {
    $$('input').forEach((element) => {
      element.value = '';
    })
  }
}
