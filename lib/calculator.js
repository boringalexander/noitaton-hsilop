'use strict';

const { expressionParser } = require('./parser');
const { push, applyStackwise } = require('./stack');

const evaluate = (stack, token) => token.isOp() ? applyStackwise(token.value, stack) : push(token.value, stack);

const rpn = (string) => {

    const parsed = expressionParser.run(string);
    const tokens = parsed.result;
    return tokens.reduce(evaluate, [])[0];
};

module.exports = { rpn };
