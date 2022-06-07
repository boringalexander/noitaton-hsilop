'use strict';

const { tokenParser, expressionParser } = require('../lib/parser');

describe('Parsers', () => {

    it('parse arithmetic symbols into tokens mapped to their operations', () => {

        const addition = tokenParser.run('+');
        const subtraction = tokenParser.run('-');
        const division = tokenParser.run('/');
        const multiplication = tokenParser.run('*');

        expect(addition.result.value(2,1)).toBe(3);
        expect(subtraction.result.value(2,1)).toBe(1);
        expect(division.result.value(4,2)).toBe(2);
        expect(multiplication.result.value(2,2)).toBe(4)
    });

    it('parses numbers', () => {

        const pi = tokenParser.run('3.14');
        const int = tokenParser.run('50');
        const negative = tokenParser.run('-10');

        expect(pi.result.value).toBe(3.14);
        expect(int.result.value).toBe(50);
        expect(negative.result.value).toBe(-10);
    });

    it('parses CLI commands', () => {

        const q = tokenParser.run('q').result;
        const quit = tokenParser.run('quit').result;
        const clear = tokenParser.run('c').result;
        const viewStack = tokenParser.run(':it').result;

        expect(q.action).toBe('QUIT');
        expect(quit.action).toBe('QUIT');
        expect(clear.action).toBe('CLEAR');
        expect(viewStack.action).toBe('VIEW_STACK');
    });

    describe('expressionParser', () => {

        it('fails when successfully parsing CLI commands', () => {

            const result = expressionParser.run('q');
            expect(result.isError).toBe(true);
            expect(result.error).toBe('QUIT');
        });

        it('successfully parses valid rpn expressions into tokens', () => {

            const parsed = expressionParser.run('3 2 1 + -');
            expect(parsed.isError).toBe(false);
            expect(parsed.result.length).toBe(5);
        });
    });
});
