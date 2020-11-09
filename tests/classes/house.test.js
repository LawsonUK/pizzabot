const House = require('../../classes/house')

test(`should setup the House object with default values`, () => {
  const house = new House()
  expect(house.location).toBe(null)
  expect(house.numberOfPizzasOrdered).toBe(1)
  expect(house.numberOfPizzasReceived).toBe(0)
})

test(`should test to see if House method getLocation return array of coords`, () => {
  const house = new House([1, 2])
  expect(house.getLocation()).toEqual([1, 2])
})

test(`should test to see if House method getNumberOfPizzasOrdered returns the same value past from the constructor parameter`, () => {
  const house = new House([1, 2], 3)
  expect(house.getNumberOfPizzasOrdered()).toBe(3)
})

test(`should test to see if House method getNumberOfPizzasReceived returns the same value past from the constructor parameter`, () => {
  const house = new House([1, 2], 1, 1)
  expect(house.getNumberOfPizzasReceived()).toBe(1)
})

test(`should test to see if House method setNumberOfPizzasReceived updates the House property numberOfPizzasReceived`, () => {
  const house = new House([1, 2], 1, 1)
  expect(house.setNumberOfPizzasReceived(2)).toBe(2)
})
