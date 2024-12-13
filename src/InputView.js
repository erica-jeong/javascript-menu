import { Console } from "@woowacourse/mission-utils";

const READ_NAME = '코치의 이름을 입력해 주세요. (, 로 구분)\n';
const NOT_EAT_MESSAGE = '(이)가 못 먹는 메뉴를 입력해 주세요.\n';

class InputView {
  async readNames() {
    const input = await Console.readLineAsync(READ_NAME);
    return input;
  }

  async readNotEat(name) {
    const input = await Console.readLineAsync(`${name}${NOT_EAT_MESSAGE}`);
    return input;
  }
}

export default InputView;
