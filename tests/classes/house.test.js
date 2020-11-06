const House = require('../../classes/house')
jest.mock('../../classes/house')

beforeEach(() => {
  House.mockClear()
})

test('should setup the House object with default values', () => {
  const house = new House()
  expect(House).toHaveBeenCalledTimes(1)
})
