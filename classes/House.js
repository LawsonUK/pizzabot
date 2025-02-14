class House {
  constructor(
    location = null,
    numberOfPizzasOrdered = 1,
    numberOfPizzasReceived = 0
  ) {
    this.location = location
    this.numberOfPizzasOrdered = numberOfPizzasOrdered
    this.numberOfPizzasReceived = numberOfPizzasReceived
  }

  getLocation = () => {
    return this.location
  }

  getNumberOfPizzasOrdered = () => {
    return this.numberOfPizzasOrdered
  }

  getNumberOfPizzasReceived = () => {
    return this.numberOfPizzasReceived
  }

  setNumberOfPizzasReceived = numberOfPizzasReceived => {
    this.numberOfPizzasReceived = numberOfPizzasReceived
    return this.numberOfPizzasReceived
  }
}

module.exports = House
