'use strict';

const { push, apply } = require('./stack');

const evaluate = (stack, token) => token.isOp() ? apply(token.value, stack) : push(token.value, stack);

const calculate = tokens => {
    const stack = tokens.reduce(evaluate, []);
    return stack[stack.length - 1];
};

module.exports = { calculate, evaluate };
