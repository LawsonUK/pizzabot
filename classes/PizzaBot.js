const Grid = require('./grid')

class PizzaBot {
  constructor(deliveryInstructions) {
    const setup = this.decipherInstructions(deliveryInstructions)
    this.Grid = new Grid(setup.gridSize, setup.houses)
    this.currentLocation = [0, 0]
    this.outputLogInstructions = ''
    this.defaultInstructions = `Please provide instructions as follows "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`
  }

  decipherInstructions = instructions => {
    // check that instructions are not empty
    if (!instructions) {
      throw new Error(
        `Sorry you have not provided any instructions for PizzaBot...PizzaBot sad. 
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

    // check to see if the grid size has been provided
    if (!gridSize.includes('x')) {
      throw new Error(
        `Sorry you have not provided a grid size to PizzaBot or it has not be correctly formatted...PizzaBot very sad. 
        ${this.defaultInstructions}`
      )
    }

    // check that the instructions are in the correct format
    const houses = sanitizedInstructions
      .substr(
        sanitizedInstructions.indexOf('('),
        sanitizedInstructions.length - 1
      )
      .trim()
    console.log('PizzaBot -> houses', houses)

    const setup = {
      gridSize,
      houses,
    }

    return setup
  }

  move = instruction => {}

  deliverPizza = () => {}

  updateOutputLogInstructions = instructionString => {
    this.outputLogInstructions += instructionString
  }
}

module.exports = PizzaBot
