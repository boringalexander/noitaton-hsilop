'use strict';

class History {

    constructor() {
        this.lines = [];
    }

    push = (newLine) => {
        this.lines.push(newLine.trim());
    }

    toCalculatorExpression = () => {
        return this.lines.join(' ');
    }
};

module.exports = History;
