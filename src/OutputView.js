import { Console } from "@woowacourse/mission-utils";
import MENU from './constatnt.js'

const START_RECOMMEND = '점심 메뉴 추천을 시작합니다.\n';
const RESULT_MESSAGE = '메뉴 추천 결과입니다.\n';
const DAY = '[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]';
const FINISH = '추천을 완료했습니다.';

class OutputView {
  printErrorMessage(errorMessage) {
    Console.print(errorMessage);
  }

  printStartMessage() {
    Console.print(START_RECOMMEND);
  }

  printResult(coaches, categoryResult) {
    Console.print(RESULT_MESSAGE);
    Console.print(DAY);
    const category = categoryResult.map(cate => MENU.category[cate]);
    Console.print(`[ 카테고리 | ${category.join(' | ')} ]`);
    coaches.forEach(coach => {
      Console.print(`[ ${coach.name} | ${coach.menu.join(' | ')} ]`);
    });
    Console.print(FINISH);
  }
}

export default OutputView;
