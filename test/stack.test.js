'use strict';

const { faker } = require('@faker-js/faker');
const { push, apply } = require('../lib/stack');

describe('Stack utils', () => {
    describe('push', () => {
        it('pushes an element onto a stack', () => {
            const value = faker.datatype.number()
            const init = [faker.datatype.number()]
          expect(push(value, init)).toStrictEqual(init.concat([value]));
        });
    });

    describe('apply', () => {
        it('applies a binary operation on topmost elements of stack ', () => {
            const result = apply((x,y) => x - y, [1,2,3])
            expect(result).toStrictEqual([1,-1]);
        });
    });
});
