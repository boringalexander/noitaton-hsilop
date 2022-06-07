'use strict';

class Token {
    constructor(value) {
        this.value = value;
    }

    static addition = () => {
        return new Token((x,y) => x + y);
    }

    static subtraction = () => {
        return new Token((x,y) => x - y);
    }

    static division = () => {
        return new Token((x,y) => { 
            if (y === 0) {
                throw new Error('Cannot divide by zero');
            }

            return x / y;
        })
    }

    static multiplication = () => {
        return new Token((x,y) => x * y);
    }

    static number = (n) => {
        return new Token(Number(n));
    }

    isOp = () => {
        return typeof this.value === 'function';
    }

}

module.exports = Token;
