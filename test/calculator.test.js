'use strict';

const { faker } = require('@faker-js/faker');
const Token = require('../lib/token');
const { expressionParser } = require('../lib/parser');
const { evaluate, calculate } = require('../lib/calculator');

describe('solveRPN', () => {

    describe('evaluate', () => {

        it('Given the token value is a binary operation, then it must apply the operation to the stack', () => {
            const nums = [faker.datatype.number(), faker.datatype.number()];
            expect(evaluate(nums, Token.addition())).toStrictEqual([nums[0] + nums[1]]);
        });

        it('Given the token value is for a number, then it must push the number onto the stack', () => {

            const nums = [faker.datatype.number(), faker.datatype.number()];
            expect(evaluate(nums, Token.number('10'))).toStrictEqual(nums.concat([10]));
        });
    });

    describe('calculate', () => {

        it('evaluates tokenized expressions', () => {

            const inputs = ['5 8 +', '5 5 5 8 + + - 13 +', '-3 -2 * 5 +', '5 9 1 - /'];
            const tokenizedInputs = inputs.map(line => expressionParser.run(line).result);
            const results = tokenizedInputs.map(calculate);
            expect(results).toStrictEqual([13, 0, 11, 0.625]);
        });
    });
});
