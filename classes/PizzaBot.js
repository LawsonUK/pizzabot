const Grid = require('./Grid')

class PizzaBot {
  currentLocation = [0, 0]
  outputLogInstructions = ''

  constructor(gridAndLocations) {
    const formattedInstructions = this.formatInstructions(
      this.validateInstructions(gridAndLocations)
    )

    this.Grid = new Grid(
      formattedInstructions.gridSize,
      formattedInstructions.locations
    )

    // The Grid is setup and the Houses needing pizza are identified...PizzaBot assemble!
    this.go()

    // PizzaBot...show the good work you have done for Slice
    this.displayPizzaBotInstructions()
  }

  validateInstructions = instructions => {
    const message = `Please provide instructions as follows "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`

    // check that instructions are not empty
    if (!instructions) {
      throw new Error(
        `Sorry you have not provided any instructions for PizzaBot. PizzaBot sad. 
        ${message}`
      )
    }

    // sanitize instructions
    const sanitizedInstructions = instructions
      .trim()
      .replace(/ /g, '')
      .toLowerCase()

    // get grid size from the argument string
    const gridSize = sanitizedInstructions.substr(
      0,
      sanitizedInstructions.indexOf('(')
    )

    // throw error if grid size is not in the correct format
    if (!gridSize.match(/^[0-9]*x[0-9]*/)) {
      throw new Error(
        `Sorry you have not provided a grid size to PizzaBot in the correct format. PizzaBot very sad. 
        ${message}`
      )
    }

    // retrieve locations
    const locations = sanitizedInstructions
      .trim()
      .substr(
        sanitizedInstructions.indexOf('('),
        sanitizedInstructions.length - 1
      )

    // throw error if instructions are not in the correct format
    // TODO fix regex
    if (!locations.match(/(?:\([0-9]*,[0-9]*\))+/)) {
      throw new Error(
        `Sorry you have not provided locations to PizzaBot in the correct format. PizzaBot just wants to work.
        ${message}`
      )
    }

    const validatedInstructions = {
      gridSize,
      locations,
    }

    return validatedInstructions
  }

  formatInstructions = validatedInstructions => {
    const gridSize = validatedInstructions.gridSize
      .split('x')
      .map(coord => parseInt(coord))

    const locations = validatedInstructions.locations
      .replace(/\)\(/g, ') (')
      .split(' ')

    const formattedInstructions = {
      gridSize,
      locations,
    }

    return formattedInstructions
  }

  go = () => {
    this.Grid.getHouses().map(house => {
      // you're not at the location yet PizzaBot
      if (house.getLocation.toString() !== this.currentLocation.toString()) {
        this.move(house)
      }

      // deliver those delicious Slice pizzas PizzaBot
      house.getLocation().toString() === this.currentLocation.toString() &&
        this.deliverPizza(house)
    })
  }

  move = house => {
    const xDiff = house.getLocation()[0] - this.getCurrentLocation()[0]
    const yDiff = house.getLocation()[1] - this.getCurrentLocation()[1]

    // Move East
    if (xDiff > 0) {
      for (let i = 0; i < xDiff; i++) {
        const currentLocation = this.getCurrentLocation()
        this.setCurrentLocation([currentLocation[0] + 1, currentLocation[1]])
        this.updateOutputLogInstructions('E')
      }
    }

    // Move West
    if (xDiff < 0) {
      for (let i = 0; i > xDiff; i--) {
        const currentLocation = this.getCurrentLocation()
        this.setCurrentLocation([currentLocation[0] - 1, currentLocation[1]])
        this.updateOutputLogInstructions('W')
      }
    }

    // Move North
    if (yDiff > 0) {
      for (let i = 0; i < yDiff; i++) {
        const currentLocation = this.getCurrentLocation()
        this.setCurrentLocation([currentLocation[0], currentLocation[1] + 1])
        this.updateOutputLogInstructions('N')
      }
    }

    // Move South
    if (yDiff < 0) {
      for (let i = 0; i > yDiff; i--) {
        const currentLocation = this.getCurrentLocation()
        this.setCurrentLocation([currentLocation[0], currentLocation[1] - 1])
        this.updateOutputLogInstructions('S')
      }
    }
  }

  deliverPizza = house => {
    const diff =
      house.getNumberOfPizzasOrdered() - house.getNumberOfPizzasReceived()

    // update household with number of pizzas delivered
    house.setNumberOfPizzasReceived(diff)

    // update PizzaBot's delivery log
    for (let i = 0; i < diff; i++) {
      this.updateOutputLogInstructions('D')
    }
  }

  updateOutputLogInstructions = instructionString => {
    this.outputLogInstructions += instructionString
  }

  displayPizzaBotInstructions = () => {
    console.log(`PizzaBot Instructions: ${this.outputLogInstructions}`)
    this.setCurrentLocation([0, 0])
  }

  getCurrentLocation = () => {
    return this.currentLocation
  }

  setCurrentLocation = location => {
    this.currentLocation = location
    return this.currentLocation
  }
}

module.exports = PizzaBot
