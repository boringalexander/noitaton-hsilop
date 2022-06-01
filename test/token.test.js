'use strict';

const Token = require('../lib/token');
const { binopInput } = require('./utils');

describe('Token', () => {
    describe('#addition', () => {
        it('creates a token whose value is additon', () => {
            const token = Token.addition();
            const [x,y] = binopInput();
            expect(token.value(x,y)).toBe(x+y);
        });
    });

    describe('#subtraction', () => {
        it('creates a token whose value is subtraction', () => {
            const token = Token.subtraction();
            const [x,y] = binopInput();
            expect(token.value(x,y)).toBe(x-y);
        });
    });

    describe('#multiplication', () => {
        it('creates a token whose value is multiplication', () => {
            const token = Token.multiplication();
            const [x,y] = binopInput();
            expect(token.value(x,y)).toBe(x*y);
        });
    });

    describe('#division', () => {
        it('creates a token whose value is division', () => {
            const token = Token.division();
            const [x,y] = binopInput();
            expect(token.value(x,y)).toBe(x/y);
        });
    });

    describe('#number', () => {
        it('creates a token whose value is a number', () => {
            const token = Token.number('10');
            expect(token.value).toBe(10);
        });
    });

    describe('.isOp', () => {
        it('returns true when its value is a function', () => {
            const number = Token.number('10');
            const ops = [Token.addition(), Token.subtraction(), Token.division(), Token.multiplication()];
            expect(number.isOp()).toBe(false);
            expect(ops.reduce((bool, token) => token.isOp() && bool, true)).toBe(true);
        });
    });
});
