const Grid = require('./Grid')

class PizzaBot {
  message = `Please provide instructions as follows "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`

  constructor(deliveryInstructions) {
    this.currentLocation = [0, 0]
    this.outputLogInstructions = 'test'

    const formattedInstructions = this.formatInstructions(
      this.validateInstructions(deliveryInstructions)
    )

    this.Grid = new Grid(
      formattedInstructions.gridSize,
      formattedInstructions.locations
    )

    // The Grid is setup and the houses mapped...PizzaBot assemble!
    this.go()
  }

  validateInstructions = instructions => {
    // check that instructions are not empty
    if (!instructions) {
      throw new Error(
        `Sorry you have not provided any instructions for PizzaBot. PizzaBot sad. 
        ${this.message}`
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
        ${this.message}`
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
        ${this.message}`
      )
    }

    // TODO check that no locations are outside of the grid

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
      console.log('Go to house ', house)
    })
  }

  move = instruction => {}

  deliverPizza = () => {}

  updateOutputLogInstructions = instructionString => {
    this.outputLogInstructions += instructionString
  }
}

module.exports = PizzaBot
