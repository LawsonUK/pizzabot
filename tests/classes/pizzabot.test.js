const PizzaBot = require('../../classes/pizzabot')

let args = null

beforeAll(() => {
  args = '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
})

/**
 * Setup Tests
 */

test(`should setup the PizzaBot object with argument instructions`, () => {
  const pizzabot = new PizzaBot(args)
  expect(pizzabot.Grid.size).toBe('5x5')
  // expect(pizzabot.Grid.houses).toBe(
  //   '(0,0)(1,3)(4,4)(4,2)(4,2)(0,1)(3,2)(2,3)(4,1)'
  // )
  expect(pizzabot.currentLocation).toEqual([0, 0])
  expect(pizzabot.outputLogInstructions).toBe('')
})

/**
 * Validation Tests
 */

test(`should test to see PizzaBot's decipherInstructions method throws an error if no instructions are provided`, () => {
  expect(() => {
    new PizzaBot()
  }).toThrowError(/not provided any instructions/)
})

test(`should test to see PizzaBot's decipherInstructions method throws an error if grid size is not formatted correctly`, () => {
  const test_args =
    '55 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
  expect(() => {
    new PizzaBot(test_args)
  }).toThrowError(/you have not provided a grid size/)
})
