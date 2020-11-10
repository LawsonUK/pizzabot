const Grid = require('../../classes/grid')

/**
 * Method Tests
 */

test(`should setup the Grid object with default values`, () => {
  const grid = new Grid()
  expect(grid.getGridSize()).toEqual([5, 5])
  expect(grid.getHouses().length).toBe(0)
})

test(`should return an array 3 Houses. 4 locations with 2 locations being the same, therefore 3 houses`, () => {
  const grid = new Grid([5, 5], ['(1,3)', '(2,2)', '(2,2)', '(4,4)'])
  expect(grid.getHouses().length).toBe(3)
})

test(`should return the correct grid size is stored from what is passed through to the constructor`, () => {
  const grid = new Grid([5, 5], ['(1,3)', '(2,2)', '(2,2)', '(4,4)'])
  expect(grid.getGridSize()).toEqual([5, 5])
})

test(`should return an array of 3 Houses, which have been created by calling the method createHousesWithOrders`, () => {
  const grid = new Grid()
  const houses = grid.createHousesWithOrders([
    '(1,3)',
    '(2,2)',
    '(2,2)',
    '(4,4)',
  ])
  expect(houses.length).toBe(3)
})

/**
 * Validation Tests
 */

test(`should throw an error if a location is outside the boundary of the Grid`, () => {
  expect(() => {
    new Grid([5, 5], ['(1,6)', '(2,2)', '(2,2)', '(4,4)'])
  }).toThrowError(/outside the delivery area/)
})
