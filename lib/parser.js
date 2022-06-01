'use strict';

const { digits, sepBy, char, choice } = require('arcsecond');

const Token = require('./token');

// Parsers for operators
const addition = char('+').map(Token.addition);
const subtraction = char('-').map(Token.subtraction);
const division = char('/').map(Token.division);
const multiplication = char('*').map(Token.multiplication);

const operator = choice([addition, subtraction, division, multiplication]);

const number = digits.map(Token.number);

const tokenParser = choice([operator, number]);
const expressionParser = sepBy(char(' '))(tokenParser);

module.exports = expressionParser;
