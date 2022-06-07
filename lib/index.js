'use strict';

const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout });
const Calculator = require('./calculator')
const History = require('./history');
const { expressionParser } = require('./parser');

const cliApp = () => {

    rl.setPrompt('> ');
    const history = new History();
    rl.on('line', (line) => {
        history.push(line);

        const expression = history.toCalculatorExpression();
        const parsedInput = expressionParser.run(expression);

        if (parsedInput.isError) {
            switch (parsedInput.error) {
                case 'QUIT':
                    rl.close();
                    return;
                case 'CLEAR':
                    history.clear();
                    break;
                case 'VIEW_STACK':
                    history.pop();
                    console.log(history.toCalculatorExpression());
                    break;
                default:
                    console.log(parsedInput.error); 
            }
        } else {

            let value;

            // Catch zero division error
            try {
                value = Calculator.calculate(parsedInput.result);
            } catch (e) {
                console.log(e.message);
                history.clear();
            }

            if (isNaN(value)) {
                // Kindly notify user of unbalanced RPN expressions
                console.log(`Invalid expression: ${expression}`);
                history.clear();
            } else {
                // Otherwise, log result of computation to stdout
                console.log(value);
            }
        }
        rl.prompt();
    }).on('close', () => {
        console.log('Goodbye');
    });

    rl.prompt();
}

module.exports = cliApp;
