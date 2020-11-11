const House = require('../../classes/house')

/**
 * Method Tests
 */

test(`should setup the House object with default values`, () => {
  const house = new House()
  expect(house.location).toBe(null)
  expect(house.numberOfPizzasOrdered).toBe(1)
  expect(house.numberOfPizzasReceived).toBe(0)
})

test(`should return an array of House coords`, () => {
  const house = new House([1, 2])
  expect(house.getLocation()).toEqual([1, 2])
})

test(`should return the same number of pizzas, which are past to the constructor parameter`, () => {
  const house = new House([1, 2], 3)
  expect(house.getNumberOfPizzasOrdered()).toBe(3)
})

test(`should return the same number of pizzas received, which are past to the constructor parameter`, () => {
  const house = new House([1, 2], 1, 1)
  expect(house.getNumberOfPizzasReceived()).toBe(1)
})

test(`should update the House property numberOfPizzasReceived`, () => {
  const house = new House([1, 2], 1, 1)
  expect(house.setNumberOfPizzasReceived(2)).toBe(2)
})
