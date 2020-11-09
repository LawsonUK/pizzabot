const PizzaBot = require('../../classes/Pizzabot')

let args = null

beforeAll(() => {
  args = '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
})

/**
 * Method Tests
 */

test(`should test to see PizzaBot's validateInstructions method throws an error if no instructions are provided`, () => {
  expect(() => {
    new PizzaBot()
  }).toThrowError(/not provided any instructions/)
})

test(`should test to see PizzaBot's validateInstructions method throws an error if grid size is not formatted correctly`, () => {
  const test_args =
    '55 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)'
  expect(() => {
    new PizzaBot(test_args)
  }).toThrowError(/you have not provided a grid size/)
})

// test(`should test to see PizzaBot's validateInstructions method throws an error if locations have not been provided in the correct format`, () => {
//   const test_args =
//     '5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) 4, 1)'
//   expect(() => {
//     new PizzaBot(test_args)
//   }).toThrowError(/not provided locations/)
// })

/**
 * Delivery Tests
 */

// Example Test
test(`should produce an output of ENNNDEEEND using input string of "5x5 (1, 3) (4, 4)"`, () => {
  const test_args = '5x5 (1, 3) (4, 4)'
  const pizzaBot = new PizzaBot(test_args)
  expect(pizzaBot.outputLogInstructions).toBe('ENNNDEEEND')
})

// Code Challenge Test
test(`should produce an output of DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD using input string of "5x5 (0, 0) (1, 3) (4,4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)"`, () => {
  const pizzaBot = new PizzaBot(args)
  expect(pizzaBot.outputLogInstructions).toBe(
    'DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD'
  )
})
