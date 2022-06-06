

const { digits, str, sepBy, possibly, sequenceOf, succeedWith, decide, char, choice, fail, anyOfString } = require('arcsecond');

const Cmd = require('./cmd');
const Token = require('./token');

// Parsers for operators
const addition = char('+').map(Token.addition);
const subtraction = char('-').map(Token.subtraction);
const division = char('/').map(Token.division);
const multiplication = char('*').map(Token.multiplication);

const quit = choice([char('q'), str('quit')]).map(Cmd.quit);
const clear = char('c').map(Cmd.clear);
const cmd = choice([quit, clear]);

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

const tokenParser = choice([number, operator, cmd]);
const failOnCmd = decide(tokens => {

    const command = tokens.find(parsedValue => parsedValue.isCmd);

    if (command) {
        return fail(command.action);
    }

    return succeedWith([]);
});

const expressionParser = sequenceOf([sepBy(char(' '))(tokenParser), failOnCmd]).map(x => x.reduce((acc,el) => acc.concat(el), []));

module.exports = { expressionParser, tokenParser };
