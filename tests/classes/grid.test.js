const Grid = require('../../classes/grid')
const House = require('../../classes/house')

test('should setup the Grid object with default values', () => {
  const grid = new Grid()
  expect(grid.size).toEqual([5, 5])
  expect(grid.houses.location).toBeNull()
  expect(grid.houses.numberOfPizzas).toBe(1)
})

// test('should setup the Grid object with provided values', () => {
//   const grid = new Grid(
//     [7, 7],
//     [
//       [1, 2],
//       [2, 2],
//     ]
//   )
//   expect(grid.size).toEqual([7, 7])
//   expect(grid.houseLocations)
// })
