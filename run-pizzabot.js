const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const PizzaBot = require('./classes/pizzabot')
new PizzaBot(yargs.parse()._[0])
