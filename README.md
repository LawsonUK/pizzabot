# PizzaBot Node App

## Setup

PizzaBot was developed using Node.js version 14.15.0 (includes npm 6.14.8). Please download from https://nodejs.org/dist/v14.15.0/

Once installed please navigate to the PizzaBot directory in your terminal. All node_module dependencies should already be contained within the tarball. However if you need to re-download them you can run the following command `npm run build`.

## How to Run

If you would like to run the coding challenge input string then you can run the following command `npm run pizzabot-challenge` from the project root directory. If you would like to pass your own input string then you can run the command `npm run pizzabot "<input string>"`

If you would like to run the suite of tests then run the following command `npm test` from the project root directory.

## Assumptions

- The command line input string argument must be contained within double quotes.
- An input string, which has a location outside of the grid, will cause a validation error.
- Duplicate locations indicate a house, which has ordered more than one pizza.
- Route optimisation is not required.

## Solution

For the input string `5x5 (0, 0) (1, 3) (4,4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)`, a solution would be `DENNNDEEENDSSDDWWWWSDEEENDWNDEESSD`.

## Project Description

As part of our continuing commitment to the latest cutting-edge pizza technology research, Slice is working on a robot that delivers pizza. We call it (dramatic pause): Pizzabot. Your task is to instruct Pizzabot on how to deliver pizzas to all the houses in a neighborhood. In more specific terms, given a grid (where each point on the grid is one house) and a list of points representing houses in need of pizza delivery, return a list of instructions for getting Pizzabot to those locations and delivering. An instruction is one of:

N: Move north
S: Move south
E: Move east
W: Move west
D: Drop pizza

Pizzabot always starts at the origin point, (0, 0). As with a Cartesian plane, this point lies at the most south- westerly point of the grid.

Therefore, given the following input string: 5x5 (1, 3) (4, 4)

one correct solution would be: ENNNDEEEND

In other words: move east once and north thrice; drop a pizza; move east thrice and north once; drop a final pizza.

Your solution should have a `pizzabot` command, executable from the command line, i.e. ./ pizzabot "5x5 (1, 3) (4, 4)"

There are multiple correct ways to navigate between locations. We do not take optimality of route into account when grading: all correct solutions are good solutions.

To complete the challenge, please solve for the following exact input string: 5x5 (0, 0) (1, 3) (4,4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)
