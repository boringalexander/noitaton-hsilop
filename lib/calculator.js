'use strict';

/**
 * @typedef {require('./token')} Token
 * @param {number[]} stack 
 * @param {Token} token 
 * @returns {number[]}
 */

const evaluate = (stack, token) => {

    if (token.isOp()) {
        const y = stack.slice(-1)[0];
        const x = stack.slice(-2,-1)[0];
        const rest = stack.slice(0, -2);
        return rest.concat([token.value(x,y)]);
    }

    return stack.concat([token.value]);
}

/**
 * @param {Token[]} tokens
 * @returns {number}
 */
const calculate = tokens => {

    const stack = tokens.reduce(evaluate, []);
    return stack[stack.length - 1];
};

module.exports = { calculate, evaluate };
