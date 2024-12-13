import { Random } from "@woowacourse/mission-utils";
import MENU from './constatnt.js'

class Recommend {

  recommendMenu(coaches) {
    const categoryList = [];
    for (let i = 0; i < 5; i += 1) {
      this.repeatRecommend(coaches, categoryList);
    }
    return categoryList;
  }


  selectCategory(categoryList) {
    const randomNumber = Random.pickNumberInRange(1, 5);
    let categoryNum = randomNumber - 1;
    let count = categoryList.filter(element => categoryNum === element).length
    while (count > 1) {
      categoryNum = Random.pickNumberInRange(1, 5) - 1;
      count = categoryList.filter(element => categoryNum === element).length
    }
    return categoryNum;
  }

  selectMenu(pickedCategory, coach) {
    // 카테고리에 있는 음식 뽑기
    const menus = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let menu = Random.shuffle(menus)[0];
    let food = MENU.list[pickedCategory][menu - 1];
    while (coach.notEat.includes(food)) { // 중복 메뉴뉴
      menu = Random.shuffle(menus)[0];
      food = MENU.list[pickedCategory][menu - 1];
    }
    return food;
  }

  repeatRecommend(coaches, categoryList) {
    const pickedCategory = this.selectCategory(categoryList);
    coaches.forEach(coach => {
      const pickedMenu = this.selectMenu(pickedCategory, coach);
      coach.menu.push(pickedMenu);
    });
    categoryList.push(pickedCategory)
  }
}

export default Recommend;
