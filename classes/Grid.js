const House = require('./house')

class Grid {
  constructor(size = [5, 5], locations = []) {
    this.size = size
    this.houses = this.createHousesWithOrders(locations)
  }

  createHousesWithOrders = (locations = []) => {
    // check for duplicate points as they are one house with multiple pizza orders

    let houses = []
    if (locations.length > 0) {
      houses = locations.map(location => {
        return new House()
      })
    }

    return houses
  }

  getGridSize = () => {
    return this.size
  }

  setGridSize = size => {
    this.size = size
    return this.size
  }

  getHouses = () => {}

  setHouses = houses => {}
}

module.exports = Grid
