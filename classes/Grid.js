const House = require('./House')

class Grid {
  constructor(size = [5, 5], locations = []) {
    this.size = size
    this.houses = this.createHousesWithOrders(locations)
  }

  createHousesWithOrders = (locations = []) => {
    const getLocationOccurences = (array, value) => {
      return array.filter(v => v === value).length
    }

    let houses = []
    let locationsChecked = []
    if (locations.length > 0) {
      houses = locations.map(location => {
        // find how many times the location is mentioned to get the household's order amount
        const numberOfPizzasOrdered = getLocationOccurences(locations, location)

        // check if location is in locations checked array
        if (getLocationOccurences(locationsChecked, location) === 0) {
          locationsChecked.push(location)

          return new House(
            // format string into array containing integers
            Array.from(
              location
                .replace(/\(/, '')
                .replace(/\)/, '')
                .split(',')
                .map(coord => parseInt(coord))
            ),
            numberOfPizzasOrdered
          )
        }
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

  getHouses = () => {
    return this.houses
  }

  setHouses = houses => {
    this.houses = houses
    return this.houses
  }
}

module.exports = Grid
