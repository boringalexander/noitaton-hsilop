'use strict';

const push = (v, stack) => stack.concat([v]);

// Apply a binary operation stackwise
const apply = (binaryOp,stack) => {
    const y = stack.slice(-1)[0];
    const x = stack.slice(-2,-1)[0];
    const rest = stack.slice(0, -2);
    return push(binaryOp(x,y), rest);
};

module.exports = { push, apply };
