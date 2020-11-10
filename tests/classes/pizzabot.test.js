const PizzaBot = require('../../classes/Pizzabot')
const House = require('../../classes/House')

let args = null
let args2 = null

beforeAll(() => {
  args = '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
  args2 = '5x5 (1, 3) (4, 4)'
})

/**
 * Validation Tests
 */

test(`should throw an error if no instructions are provided`, () => {
  expect(() => {
    new PizzaBot()
  }).toThrowError(/not provided any instructions/)
})

test(`should throw an error if grid size is not formatted correctly`, () => {
  const test_args =
    '55 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
  expect(() => {
    new PizzaBot(test_args)
  }).toThrowError(/you have not provided a grid size/)
})

test(`should throw an error if locations have not been provided in the correct format`, () => {
  const test_args =
    '5x5 (0, 0) (1, 3) (4, 4) (4, 2) 4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
  expect(() => {
    new PizzaBot(test_args)
  }).toThrowError(/not provided locations/)
})

/**
 * Method Tests
 */

test(`should return an object containing the grid size as an array and the locations as an array of strings`, () => {
  const pizzaBot = new PizzaBot(args)

  const validatedInstructions = {
    gridSize: '5x5',
    locations: '(1,3)(2,4)',
  }

  expect(pizzaBot.formatInstructions(validatedInstructions)).toEqual({
    gridSize: [5, 5],
    locations: ['(1,3)', '(2,4)'],
  })
})

test(`should update PizzaBot's current location and outputLog by calling the move method`, () => {
  const pizzaBot = new PizzaBot(args2)
  pizzaBot.setCurrentLocation([0, 0])
  pizzaBot.outputLogInstructions = ''
  pizzaBot.move(new House([1, 2]))
  const currentLocation = pizzaBot.getCurrentLocation()
  expect(currentLocation).toEqual([1, 2])
  const log = pizzaBot.getOutputLogInstructions()
  expect(log).toBe('ENN')
})

test(`should add a "D" action to the outoutLogInstructions. Output should be ENNNDEEENDD`, () => {
  const pizzaBot = new PizzaBot(args2)
  pizzaBot.deliverPizza(new House([5, 5]))
  expect(pizzaBot.getOutputLogInstructions()).toBe('ENNNDEEENDD')
})

test(`should update outoutLogInstructions from ENNNDEEEND to ENNNDEEENDD`, () => {
  const pizzaBot = new PizzaBot(args2)
  expect(pizzaBot.updateOutputLogInstructions('D')).toBe('ENNNDEEENDD')
})

test(`should output the delivery instructions "PizzaBot Instructions: DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD"`, () => {
  const pizzaBot = new PizzaBot(args)
  expect(pizzaBot.displayPizzaBotInstructions()).toBe(
    'PizzaBot Instructions: DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD'
  )
})

test(`should set current location`, () => {
  const pizzaBot = new PizzaBot(args)
  expect(pizzaBot.setCurrentLocation([1, 1])).toEqual([1, 1])
})

test(`should get current location`, () => {
  const pizzaBot = new PizzaBot(args)
  expect(pizzaBot.getCurrentLocation()).toEqual([0, 0])
})

test(`should reset current location to [0,0]`, () => {
  const pizzaBot = new PizzaBot(args)
  pizzaBot.setCurrentLocation([1, 1])
  expect(pizzaBot.resetPizzaBotLocation()).toEqual([0, 0])
})

test(`should get the PizzaBot Grid`, () => {
  const pizzaBot = new PizzaBot(args2)
  expect(pizzaBot.getGrid().getGridSize()).toEqual([5, 5])
})

/**
 * Delivery Tests
 */

// Example Test
test(`should output ENNNDEEEND, using input string of "5x5 (1, 3) (4, 4)"`, () => {
  const pizzaBot = new PizzaBot(args2)
  expect(pizzaBot.outputLogInstructions).toBe('ENNNDEEEND')
})

// Code Challenge Test
test(`should output DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD, using input string of "5x5 (0, 0) (1, 3) (4,4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`, () => {
  const pizzaBot = new PizzaBot(args)
  expect(pizzaBot.outputLogInstructions).toBe(
    'DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD'
  )
})
