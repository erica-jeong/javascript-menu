import MENU from './constatnt.js'

const EMPTY_INPUT = '[ERROR] 공백이 입력되었습니다.';
const NOT_A_NUMBER = '[ERROR] 숫자를 입력해주세요.';
const INVALID_DECIMAL = '[ERROR] 정수를 입력해주세요.';
const POSITIVE_NUMBER = '[ERROR] 음수가 입력되었습니다.';
const INVALID_CONFIRMATION = '[ERROR] Y 또는 N을 입력해주세요.'
const INVALID_COACH_COUNT = '[ERROR] 코치는 최소 2명, 최대 5명까지입니다.'
const INVALID_NAME = '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자입니다.'
const INVALID_NOT_EAT_MENU = '[ERROR] 못 먹는 메뉴는 최대 2개까지 입력 가능합니다.'
const INVALID_MENU_NAME = '[ERROR] 메뉴에 없는 음식입니다.'

class Validate {
  isEmpty(input) {
    if (!input.trim()) {
      throw new Error(EMPTY_INPUT);
    }
  }

  isNumber(input) {
    const numberInput = Number(input);
    if (Number.isNaN(numberInput)) {
      throw new Error(NOT_A_NUMBER);
    }
  }

  isInteger(input) {
    if (!Number.isInteger(Number(input))) {
      throw new Error(INVALID_DECIMAL);
    }
  }

  isPositiveNumber(input) {
    if (input <= 0) {
      throw new Error(POSITIVE_NUMBER);
    }
  }

  isYesOrNo(input) {
    if (input !== 'Y' && input !== 'N') {
      throw new Error(INVALID_CONFIRMATION);
    }
  }

  coachNames(input) {
    this.isEmpty(input);
    const names = input.split(',');
    this.isValidName(names);
  }

  isValidName(names) {
    if (names.length < 2 || names.length > 5) {
      throw new Error(INVALID_COACH_COUNT);
    }
    names.forEach(name => {
      if (name.length < 2 || name.length > 4) {
        throw new Error(INVALID_NAME);
      }
    });
  }

  notEatMenu(input) {
    if (input.trim()) {
      const menus = input.split(',');
      this.isValidMenu(menus);
    }
  }

  isValidMenu(menus) {
    if (menus.length > 2) {
      throw new Error(INVALID_NOT_EAT_MENU);
    }
    menus.forEach(menu => {
      if (!MENU.allMenu.includes(menu)) {
        throw new Error(INVALID_MENU_NAME);
      }
    })
  }
}

export default Validate;