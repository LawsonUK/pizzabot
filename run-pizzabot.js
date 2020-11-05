const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const PizzaBot = require('./classes/pizzabot')

new PizzaBot(yargs(hideBin(process.argv)).argv._[0])
