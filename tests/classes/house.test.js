const House = require('../../classes/house')

test('should setup the House object with default values', () => {
  const house = new House()
  expect(house.location).toBeNull()
  expect(house.numberOfPizzas).toBe(1)
})
