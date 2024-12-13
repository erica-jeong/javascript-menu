import { Console } from "@woowacourse/mission-utils";

const READ_NAME = '코치의 이름을 입력해 주세요. (, 로 구분)\n';

class InputView {
  async readNames() {
    const input = await Console.readLineAsync(READ_NAME);
    return input;
  }
}

export default InputView;
