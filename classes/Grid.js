const House = require('./House')

class Grid {
  constructor(size = [5, 5], locations = []) {
    this.size = size
    this.houses = this.validateHouseLocationsAgainstGridSize(
      this.createHousesWithOrders(locations)
    )
  }

  createHousesWithOrders = (locations = []) => {
    const getLocationOccurences = (array, value) => {
      // Checking string values as array checking needs deep equality
      return array.filter(v => v === value).length
    }

    let houses = []
    let locationsChecked = []
    if (locations.length > 0) {
      houses = locations.map(location => {
        // Find how many times the location is mentioned to get the household's order amount
        const numberOfPizzasOrdered = getLocationOccurences(locations, location)

        // Check if location is in locations checked array
        if (getLocationOccurences(locationsChecked, location) === 0) {
          locationsChecked.push(location)

          return new House(
            // Format string into array containing integers
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

    // Clean array
    houses = houses.filter(house => house !== undefined)

    return houses
  }

  validateHouseLocationsAgainstGridSize = houses => {
    const gridSize = this.getGridSize()

    houses.map(house => {
      const location = house.getLocation()

      if (gridSize.length > 0 && location.length > 0) {
        let outofBounds = false
        const biggestNumber =
          location[0] > location[1] ? location[0] : location[1]

        gridSize.map(boundary => {
          outofBounds = biggestNumber > boundary ? true : false
        })

        if (outofBounds) {
          throw new Error(
            `House(s) are outside the delivery area of PizzaBot. PizzaBot wants you to eat the delicious pizza but I'm afraid PizzaBot can't help you`
          )
        }
      } else {
        throw new Error(
          `Grid Size and Location arrays are not populated correctly.`
        )
      }
    })
    return houses
  }

  getGridSize = () => {
    return this.size
  }

  getHouses = () => {
    return this.houses
  }
}

module.exports = Grid
