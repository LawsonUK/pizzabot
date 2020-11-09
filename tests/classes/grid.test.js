const Grid = require('../../classes/grid')

test(`should setup the Grid object with default values`, () => {
  const grid = new Grid()
  expect(grid.getGridSize()).toEqual([5, 5])
  expect(grid.getHouses().length).toBe(0)
})

test(`should test the Grid method createHousesWithOrders to ensure it is parsing an array of string locations correctly. 4 locations with 2 locations being the same, therefore 3 houses`, () => {
  const grid = new Grid([5, 5], ['(1,3)', '(2,2)', '(2,2)', '(4,4)'])
  expect(grid.getHouses().length).toBe(3)
})

test(`should test the Grid method getGridSize to ensure the correct grid size is stored from what is passed through the constructor`, () => {
  const grid = new Grid([5, 5], ['(1,3)', '(2,2)', '(2,2)', '(4,4)'])
  expect(grid.getGridSize()).toEqual([5, 5])
})

test(`should test the Grid method getHouses to ensure the correct amount of House objects have been stored from method createHousesWithOrders`, () => {
  const grid = new Grid([5, 5], ['(1,3)', '(2,2)', '(2,2)', '(4,4)'])
  expect(grid.getHouses().length).toBe(3)
})

test(`should test the Grid method validateHouseLocationsAgainstGridSize to ensure that instructions, which specify a location outside of the grid cannot be process`, () => {
  expect(() => {
    new Grid([5, 5], ['(1,6)', '(2,2)', '(2,2)', '(4,4)'])
  }).toThrowError(/outside the delivery area/)
})
