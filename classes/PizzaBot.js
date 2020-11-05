const Grid = require('./grid')

class PizzaBot {
  constructor(deliveryInstructions) {
    this.deliveryInstructions = this.decipherInstructions(
      deliveryInstructions
    ).deliveryInstructions
    this.currentLocation = [0, 0]
    this.outputLogInstructions = ''
    this.defaultInstructions = `5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)`
  }

  decipherInstructions = instructions => {
    // check that instructions are not empty
    if (!instructions) {
      throw new Error(
        `Sorry you have not provided any instructions for PizzaBot...PizzaBot sad. 
        Please provide instructions as follows "${this.defaultInstructions}"`
      )
    }

    // parse string into array
    const instructionsArray = instructions
      .trim()
      .toLowerCase()
      .replace(', ', ',')
      .split(' ')

    // check to see if the array is empty
    if (instructionsArray.length === 0) {
      throw new Error(
        `Sorry you have not provided correctly formatted instructions to PizzaBot...PizzaBot very sad. 
        Please provide instructions as follows "${this.defaultInstructions}"`
      )
    }

    // array is populated, proceed with telling PizzaBot the Grid size

    // check that the instructions are in the correct format

    const result = {
      gridSize: '',
      deliveryInstructions: instructions,
    }

    return result
  }

  move = instruction => {}

  deliverPizza = () => {}

  updateOutputLogInstructions = instructionString => {
    this.outputLogInstructions += instructionString
  }
}

module.exports = PizzaBot
