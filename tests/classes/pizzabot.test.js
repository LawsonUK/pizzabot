const PizzaBot = require('../../classes/pizzabot')

let args = null

beforeAll(() => {
  args = '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
})

test(`should test to see PizzaBot's decipherInstructions method throw an error if no instructions are provided`, () => {
  expect(() => {
    new PizzaBot()
  }).toThrowError(/not provided any instructions/)
})

test(`should setup the PizzaBot object with argument instructions`, () => {
  const pizzabot = new PizzaBot(args)
  expect(pizzabot.deliveryInstructions).toBe(
    '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
  )
  expect(pizzabot.currentLocation).toEqual([0, 0])
  expect(pizzabot.outputLogInstructions).toBe('')
})
