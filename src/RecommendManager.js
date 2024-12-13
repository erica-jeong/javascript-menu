import Coach from './Coach.js';
import InputView from './InputView.js'
import OutputView from './OutputView.js'
import Recommend from './Recommend.js';
import Validate from './Validate.js'

class RecommendManager {
  #inputView;
  #outputView;
  #validate;
  #recommend;
  #coaches;
  #coachesList;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
    this.#validate = new Validate();
    this.#recommend = new Recommend();
  }

  async start() {
    try {
      this.#outputView.printStartMessage();
      this.#coaches = await this.#readNames();
      const notEatMenu = await this.#readNotEat();
      this.#coachesList = this.#saveCoachInfo(notEatMenu);
      // console.log(this.#coachesList)
      const result = this.#recommend.recommendMenu(this.#coachesList);
    } catch (error) {
      throw error;
    }
  }

  async #readNames() {
    while (true) {
      try {
        const input = await this.#inputView.readNames();
        this.#validate.coachNames(input);
        return input.split(',');
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  #saveCoachInfo(notEatMenu) {
    const coachesInfo = [];
    this.#coaches.forEach((coach, i) => {
      coachesInfo.push(new Coach(coach, notEatMenu[i]));
    })
    return coachesInfo;
  }

  async #readNotEat() {
    while (true) {
      try {
        const notEatMenu = await this.#readCoachesNotEat();
        return notEatMenu;
      } catch (error) {
        this.#outputView.printErrorMessage(error.message);
      }
    }
  }

  async #readCoachesNotEat() {
    const coachCnt = this.#coaches.length;
    const notEatMenu = [];
    for (let i = 0; i < coachCnt; i += 1) {
      const input = await this.#inputView.readNotEat(this.#coaches[i]);
      this.#validate.notEatMenu(input);
      notEatMenu.push(input.split(','));
    }
    return notEatMenu;
  }
}

export default RecommendManager;
