const yargs = require('yargs')
const PizzaBot = require('./classes/Pizzabot')
new PizzaBot(yargs.parse()._[0])
