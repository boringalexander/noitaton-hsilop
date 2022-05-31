'use strict';

const rpn = (string) => {

    const tokens = string.split(' ');
    return tokens.reduce(evaluate, []);
};

const evaluate = (stack, token) => {

    var x,y;
    switch (token) {
        case '+':
            [x,y] = [stack.pop(), stack.pop()];
            return stack.concat([y+x]);
        case '-':
            [x,y] = [stack.pop(), stack.pop()];
            return stack.concat([y-x]);
        case '/':
            [x,y] = [stack.pop(), stack.pop()];
            return stack.concat([y/x]);
        case '*':
            [x,y] = [stack.pop(), stack.pop()];
            return stack.concat([y*x]);
        default:
            return stack.concat([Number(token)]);
    }
};