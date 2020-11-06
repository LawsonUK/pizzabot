const Grid = require('./grid')

class PizzaBot {
  constructor(deliveryInstructions) {
    const formattedInstructions = this.formatInstructions(
      this.validateInstructions(deliveryInstructions)
    )
    this.Grid = new Grid(
      formattedInstructions.gridSize,
      formattedInstructions.locations
    )
    this.currentLocation = [0, 0]
    this.outputLogInstructions = ''
    this.defaultInstructions = `Please provide instructions as follows "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`
  }

  validateInstructions = instructions => {
    // check that instructions are not empty
    if (!instructions) {
      throw new Error(
        `Sorry you have not provided any instructions for PizzaBot. PizzaBot sad. 
        ${this.defaultInstructions}`
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

    // check to see if the grid size is in the correct format
    if (!gridSize.match(/^[0-9]*x[0-9]*/)) {
      throw new Error(
        `Sorry you have not provided a grid size to PizzaBot in the correct format. PizzaBot very sad. 
        ${this.defaultInstructions}`
      )
    }

    // retrieve locations
    const locations = sanitizedInstructions
      .substr(
        sanitizedInstructions.indexOf('('),
        sanitizedInstructions.length - 1
      )
      .trim()

    // check that the instructions are in the correct format
    // TODO fix regex
    if (!locations.match(/(?:\([0-9]*,[0-9]*\))+/)) {
      throw new Error(
        `Sorry you have not provided locations to PizzaBot in the correct format. PizzaBot just wants to work.
        ${this.defaultInstructions}`
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
      .map(houseLocation => {
        return Array.from(
          houseLocation
            .replace(/\(/, '')
            .replace(/\)/, '')
            .split(',')
            .map(coord => parseInt(coord))
        )
      })

    const formattedInstructions = {
      gridSize,
      locations,
    }

    return formattedInstructions
  }

  move = instruction => {}

  deliverPizza = () => {}

  updateOutputLogInstructions = instructionString => {
    this.outputLogInstructions += instructionString
  }
}

module.exports = PizzaBot
