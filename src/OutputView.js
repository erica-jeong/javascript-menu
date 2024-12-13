import { Console } from "@woowacourse/mission-utils";

const START_RECOMMEND = '점심 메뉴 추천을 시작합니다.\n';

class OutputView {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printStartMessage() {
    Console.print(START_RECOMMEND);
  }
}

export default OutputView;
