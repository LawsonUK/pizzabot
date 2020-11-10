const Grid = require('./Grid')

class PizzaBot {
  currentLocation = [0, 0]
  outputLogInstructions = ''

  constructor(gridAndLocations) {
    // Process the command line arguments PizzaBot.
    const formattedInstructions = this.formatInstructions(
      this.validateInstructions(gridAndLocations)
    )

    // Generate the Grid and plot the Houses PizzaBot.
    this.Grid = new Grid(
      formattedInstructions.gridSize,
      formattedInstructions.locations
    )

    // The Grid is setup and the Houses needing pizza are identified...PizzaBot assemble!
    this.go()

    // PizzaBot...show the good work you have done for Slice.
    this.displayPizzaBotInstructions()

    // Job well done PizzaBot, return to base.
    this.resetPizzaBotLocation()
  }

  validateInstructions = instructions => {
    const message = `Please provide instructions in the following format "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`

    // Check that grid and location details are not empty.
    if (!instructions) {
      throw new Error(
        `Sorry you have not provided any instructions for PizzaBot. PizzaBot sad. 
        ${message}`
      )
    }

    // Sanitize grid and location details.
    const sanitizedInstructions = instructions
      .trim()
      .replace(/ /g, '')
      .toLowerCase()

    // Get grid size from the argument string.
    const gridSize = sanitizedInstructions.substr(
      0,
      sanitizedInstructions.indexOf('(')
    )

    // Throw error if grid size is not in the correct format.
    if (!gridSize.match(/^[0-9]*x[0-9]*/)) {
      throw new Error(
        `Sorry you have not provided a grid size to PizzaBot in the correct format. PizzaBot very sad. 
        ${message}`
      )
    }

    // Retrieve locations
    const locations = sanitizedInstructions
      .trim()
      .substr(
        sanitizedInstructions.indexOf('('),
        sanitizedInstructions.length - 1
      )

    // Throw error if the locations are not in the correct format.
    if (
      locations.match(/(?:\([0-9]*,[0-9]*\))+/)[0].length !== locations.length
    ) {
      throw new Error(
        `Sorry you have not provided locations to PizzaBot in the correct format. You need to work with PizzaBot here.
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

    // Keeping the locations in string format for now until the Grid
    // method createHousesWithOrders converts them to arrays
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
    this.getGrid()
      .getHouses()
      .map(house => {
        // You're not at the location yet PizzaBot..keep going!
        if (house.getLocation.toString() !== this.currentLocation.toString()) {
          this.move(house)
        }

        // Deliver those delicious Slice pizzas PizzaBot
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

    // Update House with number of pizzas delivered
    house.setNumberOfPizzasReceived(diff)

    // Update PizzaBot's delivery log
    for (let i = 0; i < diff; i++) {
      this.updateOutputLogInstructions('D')
    }
  }

  updateOutputLogInstructions = instructionString => {
    this.outputLogInstructions += instructionString
    return this.outputLogInstructions
  }

  displayPizzaBotInstructions = () => {
    const message = `PizzaBot Instructions: ${this.getOutputLogInstructions()}`
    console.log(message)
    return message
  }

  getOutputLogInstructions = () => {
    return this.outputLogInstructions
  }

  resetPizzaBotLocation = () => {
    this.setCurrentLocation([0, 0])
    return this.getCurrentLocation()
  }

  getCurrentLocation = () => {
    return this.currentLocation
  }

  setCurrentLocation = location => {
    this.currentLocation = location
    return this.currentLocation
  }

  getGrid = () => {
    return this.Grid
  }
}

module.exports = PizzaBot
