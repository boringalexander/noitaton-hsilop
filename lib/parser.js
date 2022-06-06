

const { digits, sepBy, possibly, sequenceOf, succeedWith, decide, char, choice, fail, anyOfString } = require('arcsecond');

const Token = require('./token');

// Parsers for operators
const addition = char('+').map(Token.addition);
const subtraction = char('-').map(Token.subtraction);
const division = char('/').map(Token.division);
const multiplication = char('*').map(Token.multiplication);

const quit = char('q');

const operator = choice([addition, subtraction, division, multiplication]);

// Numeric Parsers
const prefix = anyOfString('+-');
const maybePrefix = possibly(prefix).map(x => x ? x : '');

const float = 
    sequenceOf([
        digits,
        char ('.'),
        digits
    ]).map(results => results.join(''));

const int = digits

const number = 
    sequenceOf([
        maybePrefix,
        choice([float, int])
    ]).map(results => Token.number(results.join('')));

const tokenParser = choice([number, operator, quit]);
const cmd = decide(x => {

    if (x.includes('q')) {
        return fail('QUIT');
    }
    return succeedWith([]);
});

const expressionParser = sequenceOf([sepBy(char(' '))(tokenParser), cmd]).map(x => x.reduce((acc,el) => acc.concat(el), []));

module.exports = { expressionParser, tokenParser };
