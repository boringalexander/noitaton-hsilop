

const { digits, sepBy, char, choice, coroutine } = require('arcsecond');

const Token = require('./token');

// Parsers for operators
const addition = char('+').map(Token.addition);
const subtraction = char('-').map(Token.subtraction);
const division = char('/').map(Token.division);
const multiplication = char('*').map(Token.multiplication);

const operator = choice([addition, subtraction, division, multiplication]);

// Numeric operators
const int = digits.map(Token.number);
const negative = coroutine(function*() {
    const negation = yield char('-');

    const num = yield digits;

    return Token.number(negation + num);
});

const float = coroutine(function*() {
    const num = yield digits;
    const sep =  yield char('.')
    const rest = yield digits;
    return Token.number(num + sep + rest);
});

const tokenParser = choice([negative, float, int, operator]);
const expressionParser = sepBy(char(' '))(tokenParser);

module.exports = { expressionParser, tokenParser };
