const House = require('./house')

class Grid {
  constructor(size = [5, 5], houses = []) {
    this.size = size
    this.houses = new House()
    // check if there are duplicate house locations, meaning they have ordered multiple pizzas
  }
}

module.exports = Grid
