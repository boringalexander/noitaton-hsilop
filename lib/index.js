'use strict';

const { expressionParser } = require('./parser');
const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });

const Calculator = require('./calculator')
const History = require('./history');

const repl = () => {
    rl.setPrompt('> ');
    const history = new History();
    rl.on('line', (line) => {
        history.push(line);

        const expression = history.toCalculatorExpression();
        const parsedInput = expressionParser.run(expression);

        if (parsedInput.isError) {
            console.log(parsedInput.error);
            rl.close();
        }
        const value = Calculator.calculate(parsedInput.result);
        if (isNaN(value)) {
            console.log(`Invalid expression: ${expression}`);
        } else {
            console.log(value);
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Goodbye');
    });

    rl.prompt();
}

module.exports = repl;
